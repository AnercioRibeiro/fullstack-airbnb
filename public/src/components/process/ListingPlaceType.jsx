import React from "react";
import House from "../../svg/lisitngTypes/house"
import Room from "../../svg/lisitngTypes/room"
import SharedRoom from "../../svg/lisitngTypes/shared-room"
import { useAppStore } from "../../store/store";

const ListingPlaceType = () => {
  const { placeType, setPlaceType } = useAppStore();


  const data = [
    {
      title: "Imóvel completo",
      subTitle: "Os hóspedes terão a sua disposição todo o imóvel",
      svg: <House/>
    },
    {
      title: "Um quarto",
      subTitle: "Os hóspedes terão apenas um compartimento do imóvel a sua disposição",
      svg: <Room/>
    },
    {
      title: "Quarto compartilhado",
      subTitle: "Os hóspedes poderão compartilhar um quarto a fim de dividir a renda.",
      svg: <SharedRoom/>
    },
  ]
  return <div className="flex items-center justify-center flex-col h-full gap-10">
    <h2 className="font-semibold text-4xl">
      Como descreveria o seu imóvel?
    </h2>
    <ul className="flex flex-col gap-5 w-[800px]">
    {data.map((place)=> <li key={place.title}>
      <div>
        <h4 className="font-semibold">{place.title}</h4>
        <p>{place.subTitle}</p>
      </div>
      {place.svg}
    </li>
    )}

    </ul>
  </div>;
};

export default ListingPlaceType;
