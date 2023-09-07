import React from "react";

const StepOneStarter = () => {
  return(  
<div className="flex items-center h-full mx-20">
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-4 text-airbnb-light-black">
        <div className="text-2xl">1º Passo</div>
          <h1 className="text-4xl">
            <strong>
              Partilhe detalhes sobre o teu imóvel
            </strong>
          </h1>
          <p className="text-xl">
            Adicione informações sobre o imóvel, tais como: tipo de propriedade
            localização
          </p>
          </div>
          <div>
            <video src="/home.mp4" autoPlay loop controls={false}/>
          
      </div>
    </div>
  </div>
  );
};

export default StepOneStarter;
