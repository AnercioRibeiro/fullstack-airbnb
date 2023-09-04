"use client"
import AirBnbLogoShort from "../../svg/airbnb-logo-short"
import Overview from "../../components/process/Overview"
import React, { useState } from "react";
const page = () => {

  const [step, setStep] = useState(0);
  const getComponent = () =>{
    switch (step) {
      case 0:
        return <Overview/>;
    }
  };

  return (
  <div className="grid grid-rows-new-listing h-[100vh]">
    <header className="flex items-center px-20 justify-between">
      <div className="cursor-pointer">
      <AirBnbLogoShort />
      </div>
      {
        step <=13 && (
        <button className="border border-gray-300 px-5 py-2 
        rounded-full font-semibold hover:border-gray-700 cursor-pointer">
          Salvar e Sair
        </button>
      )}
    </header>
    {getComponent()}
    <footer className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300`}>

    </footer>
  </div>
  );
};

export default page;
