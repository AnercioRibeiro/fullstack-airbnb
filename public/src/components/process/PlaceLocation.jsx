import React from "react";
import { Map } from "react-map-gl";
import  GeocoderControl  from "../../components/process/geocoder-control";
import { useAppStore } from "../../store/store";

const PlaceLocation = () => {

  // const data = [
  //   landmark: ""
  // ]

  const {setMapData, setLocationData} = useAppStore()

  const getResults = ({result})=>{
    console.log(result);
    const [longitude, latitude] = result?.geometry?.cordinates;
    const data = {
      landmark: result?.text,
      neighborhood: "",
      postcode: "",
      locality: "",
      place: "",
      district: "",
      region: "",
      country: "",
    };
    result?.context?.forEach(item=>{
      Object.keys(data)?.forEach((key)=>{
        if(item?.id?.startWith(key+".")){
          data[key] = item?.text;
        }
      });
    });
    setMapData({longitude,latitude});
    setLocationData({...data})
    
  };
  return (<div className="flex flex-col items-center justify-center h-full gap-5">
    <h2 className="font-semibold text-4xl">
      lorem ipsum
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Facere nesciunt nam nostrum hic
    </p>
    <div className="h-[400px] w-[700px]">
      <Map initialViewState={
        {longitude: -79.4512,
        latitude: 43.6568,
        zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
          <GeocoderControl mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN} 
          position="top-left" 
          marker={true} 
          onLoading={()=>{}}
          onResults={()=>{}}
          onResult={getResults}
          onError={()=>{}} />
      </Map>
  
    </div>
  </div>
  );
};

export default PlaceLocation;
