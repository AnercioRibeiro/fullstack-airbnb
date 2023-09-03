"use client";

import AirBnbLogo from "../../svg/airbnb-logo"
import Image from "next/image"
import React, { useState } from "react";
import {FiGlobe} from "react-icons/fi";
import {RxHamburgerMenu} from "react-icons/rx"
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "../../store/store";


const Navbar = () => {

  const {setAuthModal} = useAppStore();

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
            <span>
              <Image src="/empty-profile.png" alt="profile"
                          height={10} width={30} />
            </span>
          </li>
        </ul>
      </div>
    </div>
    {
      isContextMenuVisibile && <ContextMenu 
      contextMenu={isContextMenuVisibile} 
      setContextMenu={setIsContextMenuVisibile}
      cordinates={{
        x: window.innerWidth - 250,
        y: 70,
      }}
      options={contextMenuOptions}
      />
      }
  </header>
  );
};

export default Navbar;
