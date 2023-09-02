"use client"

import React , { useState } from "react";
import {IoMdClose} from "react-icons/io"
import FormInput from "../common/FormInput";

const AuthModal = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userFound, setUserFound] = useState(null);

  return  (
  <div className="relative z-50">
  <div className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 z-10  overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden 
      rounded-lg bg-white text-left shadow-xl transition-all">
        <div className="bg-white pb-4 pt-5">
          <div className="border-b border-b-gray-200 flex items-center 
          justify-center relative pb-5">
            <span className="absolute left-5 cursor-pointer text-lg">
              <IoMdClose/>
            </span>
            <span>Log in or Signup</span>
          </div>
          <div className="pb-5">

            <h3 className="text-xl pb-5">Welcome to Airbnb</h3>
            {
              userFound === null && (
              <FormInput name="email" 
              placeholder="Email" value={email} setvalue={setEmail}/>
           )}
          </div>
        </div>
      
    </div>
  </div>

  </div>
</div>
);
};

export default AuthModal;
