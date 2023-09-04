import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Credentials, SignupCredentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";
import { NotFoundException } from "src/errors";
import { User } from "src/user/base/User";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("Credenciais erradas");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }


  async signup(credentials: SignupCredentials): Promise<UserInfo>{

    //Extrair o username e a password do request body
    const {username, password, firstName, lastName} = credentials;
    //Here we attempt to create a new user
    const user = await this.userService.create({
      
      data: {
        username,
        password,
        firstName,
        lastName,
        roles: ["user"],
      },
    });
    console.log(user)
//se der erro na criação do novo user
if (!user) {
  throw new UnauthorizedException("Não foi possível criar o novo utilizador");
}
//Criar token de acesso para o novo user
const accessToken = await this.tokenService.createToken({
  id: user.id,
  username,
  password
});
//retornar o token de acesso com outros detalhes do user
return {
  accessToken,
  username: user.username,
  id: user.id,
  roles: (user.roles as {roles: string[]}).roles,
};
  }

  async me(authorization: string = ""): Promise<User>{
    const bearer = authorization.replace(/^Bearer\s/, "");
    const username = this.tokenService.decodeToken(bearer);
    const result = await this.userService.findOne({
      where: {username},
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },

    });
    if (!result) {
      throw new NotFoundException(`Nenhum recurso foi encontrado pelo ${username}`);

    }
    return result;
  }

async checkUser(email: string){
  
  const userStatus = await this.userService.findOne({
    where: { username: email },
    select: { username: true, firstName: true, lastName: true },
  });
  if (!userStatus) {
    throw new NotFoundException(`Nenhum recurso foi encontrado pelo ${email}`)
  }

  return userStatus;
}
}
