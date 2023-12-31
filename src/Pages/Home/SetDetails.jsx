import { useLocation, useNavigate } from "react-router-dom";
import PickDate from "./PickDate";
import LocationHeightSelector from "./LocationHeight";
import { useState } from "react";
import { toast } from "react-hot-toast";
import UploadImage from "./UploadImage";
import useAuth from "../../Hooks/useAuth";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import PickUpDate from "./PickUpDate";

const SetDetails = () => {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [parcelName, setParcelName] = useState('')
  const [type, setType] = useState('Glass')
  const [additionalCharge, setAdditionalCharge] = useState(0);
  const [pickUpCost, setPickupCost] = useState(0);
  const [image, setImage] = useState('')
  const [quantity, setQuantity] = useState(1)

  const costDistance = location?.state?.distanceCost
  const destination = location?.state?.destination
  const totalCost = costDistance + additionalCharge + pickUpCost
  const shippingBody = {
    email: user?.email,
    parcelName: parcelName,
    distanceCost: costDistance * quantity,
    parcelType: type,
    pickUpCost: pickUpCost * quantity,
    floorCost: additionalCharge * quantity,
    totalCost: totalCost * quantity,
    destination: destination,
    image: image.image,
    quantity: quantity
  }

  const getName = (e) => {
    setParcelName(e.target.value)
  }
  const getQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const handleSelect = (e) => {
    setType(e.target.value);
  }
  console.log(pickUpCost);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parcelName && pickUpCost && image && quantity > 0) {
      navigate('/payment', {
        state: {
          shippings: shippingBody
        },
      });
    } else {
      if (!parcelName) {
        toast.error('Please Provide Parcel Name');
        return
      }
      else if (!pickUpCost) {
        toast.error('Please Select Your Parcel Delivery Date');
        return
      }
      else if (!image) {
        toast.error('Select Your Parcel Image');
        return
      }
      else if (!quantity < 1) {
        toast.error('Give a positive quantity');
        return
      }

    }
  }

  return (
    <div>
      <Helmet>
        <title>SetDetails | ShipSwiftly</title>
      </Helmet>
      <Marquee>
        <p className='text-center text-4xl font-semibold text-orange-600 my-6'>Provide Your Your Parcel Details</p>
      </Marquee>
      <div className="md:flex md:mx-12 mx-2 my-6 gap-3">
        <div className="border rounded-md p-2 md:p-5 md:w-2/3 bg-slate-100 mb-3">
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
            <div>
              <label className="font-semibold" htmlFor="">Parcel Quantity</label>
              <input onChange={getQuantity} className="input-design mt-2" type="number" defaultValue={1} id="" />
            </div>
            <input className='continue-button mt-8 cursor-pointer' type="submit" value="Go To Payment" />
          </form>
          <PickUpDate setPickupCost={setPickupCost}></PickUpDate>
          {/* <PickDate setPickupCost={setPickupCost}></PickDate> */}
        </div>
        <div className="p-2 text-xl md:p-5 w-96 border-2 text-white bg-orange-400 mb-3 rounded-md">
          <h1 className='text-center underline font-bold text-2xl my-5'>Shipping Details</h1>
          <h1>Parcel Name: {parcelName}</h1>
          <h1>Parcel Destination: {destination}</h1>
          <h1>Parcel type: {type}</h1>
          <h2>Cost For Distance: {costDistance * quantity} &#2547;</h2>
          <h2>Pickup Cost: {pickUpCost * quantity} &#2547;</h2>
          <h2>Height Cost: {additionalCharge * quantity} &#2547;</h2>
          <h1>Total Cost: {totalCost * quantity} &#2547;</h1>
        </div>
      </div>
    </div>
  );
};

export default SetDetails;