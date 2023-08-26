import { useEffect, useState } from 'react';
import districts from '../../Components/Districts'
import { Link } from 'react-router-dom';
import calculateShippingCost from '../../Hooks/calculateShippingCost';
// import PickDate from './PickDate';

function District() {
    const [searchTerm, setSearchTerm] = useState('');
    const [distance, setDistance] = useState('');
    const [parcelWeight, setParcelWeight] = useState('')

    // Function to handle input change
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

    return (
        <div className='flex w-3/4 mx-auto my-6'>
            <form className='bg-gray-400 w-full p-5 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="" className='font-semibold text-xl'>From</label>
                    <input className='border-2 w-full p-2 my-2 rounded-md block' readOnly type="text" defaultValue='Dhaka' />
                </div>
                <div>
                    <label htmlFor="" className='font-semibold text-xl'>Destination</label>
                    <input className='input-design block' type="text" value={searchTerm} onChange={handleInputChange}
                        list="suggestions"
                        placeholder="to"
                    />
                    <datalist id="suggestions">
                        {districts.map((item, index) => (
                            <option key={index} value={item.district} />
                        ))}
                    </datalist>
                </div>
                {/* <div>
                    <label htmlFor="" className='font-semibold text-xl'>Total Distance</label>
                    <input className='input-design block' placeholder='Distance' value={distance ? distance : ''} readOnly type="text" />
                </div> */}
                <div>
                    <label htmlFor="">Parcel Weight</label>
                    <input onChange={handleParcelWeight} className='input-design' type="number" />
                </div>
                <Link to="/setDetails" state={{ distanceCost: totalCost , destination: searchTerm}}><button className='continue-button'>Contine</button></Link>
            </form>
            <div className='w-80 border-2 p-5 ml-2 bg-red-400 text-white'>
                <h1>From: Dhaka</h1>
                <h1 className='py-2'>To: {searchTerm}</h1>
                <h1>Distance: {distance  || 0} Kilometer</h1>
                <p className='pb-2'>Cost For Distance: {totalCost} tk</p>               
                
            </div>
        </div>
    );
}

export default District;
