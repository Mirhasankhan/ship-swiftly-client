import { useState } from "react";

function LocationHeightSelector({setAdditionalCharge}) {
  const [locationHeight, setLocationHeight] = useState('Ground floor');

  const handleLocationHeightChange = (e) => {
    const selectedHeight = e.target.value;
    let charge = 0;

    if (selectedHeight === 'First floor') {
      charge = 2;
    } else if (selectedHeight === 'Second floor and above') {
      charge = 4;
    }

    setLocationHeight(selectedHeight);
    setAdditionalCharge(charge);     
  };

  return (
    <div>
     <label className="font-semibold" htmlFor="">Select Location Height: </label>
      <select className="rounded-md border-2 p-1 my-2 outline-green-500 w-full" value={locationHeight} onChange={handleLocationHeightChange}>
        <option value="Ground floor">Ground floor</option>
        <option value="First floor">First floor</option>
        <option value="Second floor and above">Second floor and above</option>
      </select>      
    </div>
  );
}

export default LocationHeightSelector;
