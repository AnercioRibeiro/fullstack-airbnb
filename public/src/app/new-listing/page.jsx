"use client"
import ListingPlaceType from "../../components/process/ListingPlaceType";
import AirBnbLogoShort from "../../svg/airbnb-logo-short";
import ListingTypeSelector from "../../components/process/ListingTypeSelector";
import StepOneStarter from "../../components/process/StepOneStarter";
import Overview from "../../components/process/Overview";
import React, { useState } from "react";
const page = () => {

  const [step, setStep] = useState(0);
  const getComponent = () =>{
    switch (step) {
      case 0:
        return <Overview/>;
      case 1:
        return <StepOneStarter/>;
      case 2:
        return <ListingTypeSelector/>;
      case 3:
        return <ListingPlaceType/>
    }
  };

  const handleNext = () => {
    setStep(step+1)
  };
  const handlePrevious = () => {
    setStep(step-1)
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
    <footer className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${step>0 ? "justify-between":"justify-end"}`}
    >
      {
        step>=1 && (
          <button className="py-3 mt-5 px-10 text-airbnb-light-black underline hover:bg-gray-200 
          text-base font-medium rounded-md cursor-pointer"
          onClick={handlePrevious}>
            Voltar
          </button>
        )}
        {
          step !==0 ?
         ( <button className="bg-[#222222] py-3 mt-5 px-5 text-white 
          text-base font-medium rounded-md cursor-pointer"
          onClick={handleNext}>
            Próximo
          </button> ) : (
           <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white 
           text-base font-medium rounded-md cursor-pointer"
           onClick={handleNext}>
             Começar
           </button>)}
         
    </footer>
  </div>
  );
};

export default page;
