import { FiCloudLightning } from "react-icons/fi";
import { createUrl, get, isStoredJwt, post, setStoredJwt } from "./http";

export const me = async () => {
    return isStoredJwt()
      ? (await get(createUrl("/api/me")).catch(() => null))?.data
      : null;
  };

  export const login = async (username, password, firstName, lastName) => {
    const result = (
      await post(createUrl("/api/login"), 
      { username, password, firstName, lastName }).catch(
        () => null
      )
    )?.data;
  
    if (!result) {
      return alert("Nao foi possível fazer o login");
    }
    setStoredJwt(result.accessToken);
    return me();
  };

  export const signup = async (username, password, lastName, firstName) => {
    debugger
    const result = (
      await post(createUrl("/api/signup"), { username, password, lastName, firstName }).catch(
        () => null
      )
    )?.data;
  console.log(result);
    if (!result) {
      return alert("Não foi possível fazer o registo");
    }
    setStoredJwt(result.accessToken);
    return me();
  };

  export const checkUser = async (email) => {
    
    const result = await post(createUrl("/api/check-user"),{email}).catch(
        () => null
        )
        console.log(result);
        if (!result) return false;
        return true;
    
  };