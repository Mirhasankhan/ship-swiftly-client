import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calculatePriorityCost from '../../Hooks/priority';
import { toast } from 'react-hot-toast';

const PickDate = ({setPickupCost}) => {
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(null);
    const [pickup, setPickup] = useState('')

    const calculateDateDifference = () => {
        if (endDate) {
            const differenceInDays = Math.floor(
                (endDate - startDate) / (24 * 60 * 60 * 1000)
            );
            setPickup(differenceInDays) 
                 
        } else {
            toast.error('Please select both start and end dates.', {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
            })           
        }

        const priorityCost = calculatePriorityCost(pickup)
               
        setPickupCost(priorityCost);
    };   

    const customInput = (
        <input
            className="custom-input border-2 p-1 mb-4"
            value={startDate.toLocaleDateString()}
            readOnly
        />
    );
    return (
        <div>
            <h1 className='font-semibold pb-2'>Select Your Expected Delivery Date:</h1>
            <label htmlFor="">Submitting Date: </label>
            <DatePicker            
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={customInput}
                readOnly
            />
            
            <label htmlFor="">Delivery Date: </label>
            <DatePicker
            className='border-2 p-1 mb-4'
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                minDate={startDate}
                startDate={startDate}
                endDate={endDate}
                placeholderText="Select end date"
            />
            <br />           
            <button className='continue-button' onClick={calculateDateDifference}>Confirm Picking Date</button>
        </div>
    );
};

export default PickDate;