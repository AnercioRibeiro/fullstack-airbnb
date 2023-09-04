import Image from "next/image";
import React from "react";

const Overview = () => {


  const mainTitle = "É fácil começar no airbnb";
  const data = [
    {
      title : "Detalhes do seu imóvel.",
      description: "Partilhe informações básicas, tais como: número de hóspedes que o imóvel alberga.",
      image: "/overview1.webp"
    },
    {
      title: "Dê visibilidade ao seu imóvel.",
      description: "Adicione 5 imagens ou mais, com título e descrição.",
      image: "/overview2.webp"
    },
    {
      title: "Termine de preencher os dados e publique.",
      description: "Escolha se queres começar com hóspedes por experiência, adiciona o valor de aluguel e publique.",
      image: "/overview3.webp"
    },
  ];
  return (
  <div className="flex h-full justify-between items-center px-32 gap-20">
    <div>
      <strong>
        <h3 className="text-5xl leading-normal tex-airbnb-light-black">
          {mainTitle}
        </h3>

      </strong>
    </div>
    <ul className="flex flex-col gap-16">
      {
        data.map(({description,title,image}, index) => (
        <li key={title} 
        className="flex items-center jsutify-start gap-6">
          <strong className="
          text-2xl pt-5 text-airbnb-light-black">
            <h3>{index+1}</h3>
          </strong>
          <div className="pt-5">
            <strong className="text-2xl text-airbnb-light-black">
              <h3>{title}</h3>
              </strong>
          
          <p className="text-airbnb-light-gray">
            {description}
          </p>
          </div>
          <div className="relative w-48 h-32 object-cover">
            <Image src={image} alt="overview" fill />
          </div>
        </li>
        ))}
    </ul>
  </div>
  );
};

export default Overview;
