import { Link, useLocation } from "react-router-dom";
import PickDate from "./PickDate";
import LocationHeightSelector from "./LocationHeight";
import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";

const SetDetails = () => {
  const location = useLocation()
  const [parceName, setParcelName] = useState('')
  const [type, setType] = useState('glass')
  const [additionalCharge, setAdditionalCharge] = useState(0);
  const [pickUpCost, setPickupCost] = useState(0);
  const costDistance = location?.state?.distanceCost
  const destination = location?.state?.destination
  const totalCost = costDistance + additionalCharge + pickUpCost
  const shippingBody = { parcelName: parceName, distanceCost: costDistance, parcelType: type, pickUpCost: pickUpCost, floorCost: additionalCharge, totalCost: totalCost, destination: destination }

  const getName = (e) => {
    setParcelName(e.target.value)
  }

  const handleSelect = (e) => {
    setType(e.target.value);
  }

  // const handleConfirmShipping = () => {
   
  //   axios.post('/shippings', shippingBody)
  //     .then(() => {
  //       toast.success('Shipping Updated', {
  //         position: 'top-right',
  //         style: { backgroundColor: 'green', color: 'white', fontWeight: 'semibold' }
  //     })  
  //     })
  // }

  return (
    <div className="flex mx-12">
      <div className="border rounded-md p-5 w-2/3 bg-slate-200">
        <div className="grid grid-cols-2 gap-5 pb-5">
          <div>
            <label className="font-semibold" htmlFor="">Parcel Name</label>
            <input onChange={getName} type="text" className="input-design" id="" placeholder="Product Name" />
          </div>
          <div>
            <button className="btn">Upload Image</button>
          </div>
          <LocationHeightSelector setAdditionalCharge={setAdditionalCharge} />
          <div>
            <label className="font-semibold" htmlFor="">Parcel Type : </label>
            <select onChange={handleSelect} className="border-2 p-1 my-2 rounded-md outline-green-400 w-full" name="parcel" id="parcel">
              <option value="glass">Glass</option>
              <option value="wood">wood</option>
              <option value="steel">steel</option>
            </select>
          </div>
          {/* <button onClick={handleConfirmShipping} className='continue-button'>Confirm Order</button> */}
        </div>
        <PickDate setPickupCost={setPickupCost}></PickDate>
      </div>
      <div className="p-5 border-2 ml-2 text-white bg-orange-400">
        <h1 className="text-center">Shipping Details</h1>
        <h1>Parcel Name: {parceName}</h1>
        <h1>Parcel Destination: {destination}</h1>
        <h1>Parcel type: {type}</h1>
        <h2>Cost For Distance: {costDistance}</h2>
        <h2>Pickup Cost: {pickUpCost}</h2>
        <h2>Height Cost: {additionalCharge}</h2>
        <h1>Total Cost: {totalCost}</h1>
        <Link to="/payment" state={{shippings: shippingBody}}><button className='continue-button'>Payment</button></Link>
      </div>
    </div>
  );
};

export default SetDetails;