import React from "react";

const PlaceDetails = () => {

  const {locationData,setLocationData} = useAppStore();

  const handleChange = (name, value) => {
    setLocationData({...locationData, [name]: value});
  };

  return <div className="flex justify-center items-center h-full flex-col gap-2 w-gull">
    <div className="flex flex-col gap-3">
    <h3 className="font-semibold text-4xl">
      
    </h3>
    </div>
  </div>;
};

export default PlaceDetails;
