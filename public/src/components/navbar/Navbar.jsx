"use client";

import AirBnbLogo from "../../svg/airbnb-logo"
import Image from "next/image"
import React, { useState } from "react";
import {FiGlobe} from "react-icons/fi";
import {RxHamburgerMenu} from "react-icons/rx"
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "../../store/store";


const Navbar = () => {

  const {setAuthModal, userInfo, setUserInfo} = useAppStore();

const [isContextMenuVisibile, setIsContextMenuVisibile] = useState(false);
const contextMenuOptions = [
  {
  name: "Login",
  callBack:() => {
    setAuthModal();
    setIsContextMenuVisibile(false);

  },
},
{
  name: "Signup",
  callBack:() => {
    setAuthModal();
    setIsContextMenuVisibile(false);
  },
},
{
  name: "Airb your home",
  callBack:() => {
    setIsContextMenuVisibile(false);
  },
},
{
  name: "Help",
  callBack:() => {
    setIsContextMenuVisibile(false);
  },

},
];

const authenticatedContextMenuOptions = [
  {
    name:"Mensagens",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
  },
  {
    name:"Notificações",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
  },
  {
    name:"Viagens",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
    
  },
  {
    name:"Lista de desejos",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
  },
  {
    name:"Gerir listagens",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
  },
  {
    name:"Ajuda",
    clalBack:() =>{
      setIsContextMenuVisibile(false);
    },
  },
  {
    name:"Sair",
    clalBack:() =>{
      setUserInfo(null)
      setIsContextMenuVisibile(false);
      localStorage.clear();
    },
  },
]

  return (
  <header className="w-full flex flex-col 
  justify-center transition-all duration-300 h-20 border-b border-b-gray-200d">
    <div className="flex items-center justify-between px-20">
      <div className="flex-grow basis-0">
         <div className="w-max cursor-pointer">
          <AirBnbLogo/>
         </div>
      </div>
      <div className="flex-grow basis-0">
        <ul className="flex items-center justify-end gap-6 
        font-medium">
          <li className="cursor-pointer">
            <span>Airbnb your home</span>
          </li>
          <li className="cursor-pointer">
            <FiGlobe/>
          </li>
          <li className="flex cursor-pointer items-center 
          gap-2 border border-gray-300 py-2 px-3 rounded-full hover:shadow-xl 
          transition-all duration-500" onClick={()=>setIsContextMenuVisibile(true)}>
            <RxHamburgerMenu/>
            {
              userInfo ? 
              (
                <span className="flex justify-center items-center
                 bg-black text-white h-7 w-7 text-sm rounded-full">
                  {userInfo?.firstName?.split("").shift().toUpperCase()}
                </span>
              ) : (
            
            <span>
              <Image src="/empty-profile.png" alt="profile"
                          height={10} width={30} />
            </span>
            )}
          </li>
        </ul>
      </div>
    </div>
    {
      isContextMenuVisibile && (<ContextMenu 
      contextMenu={isContextMenuVisibile} 
      setContextMenu={setIsContextMenuVisibile}
      cordinates={{
        x: window.innerWidth - 250,
        y: 70,
      }}
      options = 
      { 
        userInfo 
        ? authenticatedContextMenuOptions 
        : contextMenuOptions
      }
      />
      )}
  </header>
  );
};

export default Navbar;
