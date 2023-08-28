import { useLocation, useNavigate } from "react-router-dom";
import PickDate from "./PickDate";
import LocationHeightSelector from "./LocationHeight";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UploadImage from "./UploadImage";
import useAuth from "../../Hooks/useAuth";
import Marquee from "react-fast-marquee";

const SetDetails = () => {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [parcelName, setParcelName] = useState('')
  const [type, setType] = useState('Glass')
  const [additionalCharge, setAdditionalCharge] = useState(0);
  const [pickUpCost, setPickupCost] = useState(0);
  const [image, setImage] = useState('')

  const costDistance = location?.state?.distanceCost
  const destination = location?.state?.destination
  const totalCost = costDistance + additionalCharge + pickUpCost
  const shippingBody = { email: user?.email, parcelName: parcelName, distanceCost: costDistance, parcelType: type, pickUpCost: pickUpCost, floorCost: additionalCharge, totalCost: totalCost, destination: destination, image: image.image }

  const getName = (e) => {
    setParcelName(e.target.value)
  }

  const handleSelect = (e) => {
    setType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parcelName && pickUpCost && image) {
      navigate('/payment', {
        state: {
          shippings: shippingBody
        },
      });
    } else {
      if(!parcelName){
        toast.error('Please Provide Parcel Name');
        return
      }
      else if(!pickUpCost){
        toast.error('Please Select Your Parcel Delivery Date');
        return
      }
      else if(!image){
        toast.error('Select Your Parcel Image');
        return
      }
      
    }
  }

  return (
    <div>
      <Marquee>
        <p className='text-center text-2xl text-orange-600 my-4'>Provide Your Your Parcel Details</p>
      </Marquee>
      <div className="flex mx-12 my-6">
        <div className="border rounded-md p-5 w-2/3 bg-slate-200">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 pb-5">
            <div>
              <label className="font-semibold" htmlFor="">Parcel Name</label>
              <input onChange={getName} type="text" className="input-design" id="" placeholder="Product Name" />
            </div>
            <div>
              <UploadImage setImage={setImage} />
            </div>
            <LocationHeightSelector setAdditionalCharge={setAdditionalCharge} />
            <div>
              <label className="font-semibold" htmlFor="">Parcel Type : </label>
              <select onChange={handleSelect} className="border-2 p-1 my-2 rounded-md outline-green-400 w-full" name="parcel" id="parcel">
                <option value="Glass">Glass</option>
                <option value="Wood">Wood</option>
                <option value="Steel">Steel</option>
              </select>
            </div>
            <input className='continue-button cursor-pointer' type="submit" value="Go To Payment" />
          </form>
          <PickDate setPickupCost={setPickupCost}></PickDate>
        </div>
        <div className="p-5 border-2 ml-2 text-white bg-orange-400">
          <h1 className="text-center">Shipping Details</h1>
          <h1>Parcel Name: {parcelName}</h1>
          <h1>Parcel Destination: {destination}</h1>
          <h1>Parcel type: {type}</h1>
          <h2>Cost For Distance: {costDistance}</h2>
          <h2>Pickup Cost: {pickUpCost}</h2>
          <h2>Height Cost: {additionalCharge}</h2>
          <h1>Total Cost: {totalCost}</h1>
        </div>
      </div>
    </div>
  );
};

export default SetDetails;