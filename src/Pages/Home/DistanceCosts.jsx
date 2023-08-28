import { useEffect, useState } from 'react';
import districts from '../../Components/Districts'
import { useNavigate } from 'react-router-dom';
import calculateShippingCost from '../../Hooks/calculateShippingCost';
import Marquee from "react-fast-marquee";
import { toast } from 'react-hot-toast';

function DistanceCosts() {
    const [searchTerm, setSearchTerm] = useState('');
    const [distance, setDistance] = useState('');
    const [parcelWeight, setParcelWeight] = useState('')
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleParcelWeight = (e) => {
        setParcelWeight(e.target.value)
    }

    useEffect(() => {
        const getDistance = districts.find(d => d.district == searchTerm)
        setDistance(Math.round(getDistance?.actualDistanceFromDhaka))
    }, [searchTerm])

    const totalCost = calculateShippingCost(parcelWeight, distance)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm && parcelWeight > 0 && parcelWeight < 40.01) {
            navigate('/setDetails', {
                state: {
                    distanceCost: calculateShippingCost(parcelWeight, distance),
                    destination: searchTerm,
                },
            });
        } else {
            if(parcelWeight > 40.01){
                toast.error('Weight should be less than 40 KG');
                return
            }
            toast.error('Weight should be positive number');
        }
    }

    return (
        <div>
            <h1 className='text-center text-4xl text-sky-600 py-8 font-bold'>Hi, Welcome To ShipSwhiftly</h1>
            <Marquee>
                <p className='text-center text-2xl text-orange-600'>Provide Your Destination & Parcel Weight For Shipping</p>
            </Marquee>
            <div className='md:flex md:w-4/5 md:mx-auto mx-3 my-6'>
                <form onSubmit={handleSubmit} className='bg-slate-400 rounded-lg w-full p-2 md:p-5 grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='font-medium text-xl'>From*</label>
                        <input className='input-design my-2 block' readOnly type="text" defaultValue='Dhaka' />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium text-xl'>Destination*</label>
                        <input required className='input-design my-2 block' type="text" value={searchTerm} onChange={handleInputChange}
                            list="suggestions"
                            placeholder="To"
                        />
                        <datalist id="suggestions">
                            {districts.map((item, index) => (
                                <option key={index} value={item.district} />
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <label className='font-medium text-xl' htmlFor="">Parcel Weight*</label>
                        <input onChange={handleParcelWeight} className='input-design my-2' type="text" placeholder='Weight'/>
                    </div>
                    <input className='continue-button cursor-pointer mt-8' type="submit" value="Continue" />
                </form>
                <div className='md:w-96 w-full rounded-md border-2 p-5 md:ml-2 bg-sky-400 text-white'>
                    <h1 className='text-center underline font-bold text-2xl my-5'>Distance & Cost</h1>
                    <h1 className='text-xl font-medium'>From: <span className='text-black'>Dhaka</span></h1>
                    <h1 className='py-2 text-xl font-medium'>To: <span className='text-black'>{searchTerm}</span></h1>
                    <h1 className='text-xl font-medium'>Distance: <span className='text-black'>{distance || 0} Kilometer</span></h1>
                    <p className='py-2 text-xl font-medium'>Cost For Distance: <span className='text-black'>{totalCost} &#2547; </span></p>
                </div>
            </div>
        </div>
    );
}

export default DistanceCosts;
