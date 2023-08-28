import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calculatePriorityCost from '../../Hooks/priority';
import { toast } from 'react-hot-toast';

const PickDate = ({ setPickupCost }) => {
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(null);
    const [pickup, setPickup] = useState('')

    const calculateDateDifference = () => {
        if (endDate) {
            const differenceInDays = Math.floor(
                (endDate - startDate) / (24 * 60 * 60 * 1000)
            );
            toast.success('Date Confirmed')
            setPickup(differenceInDays)

        } else {
            toast.error('Please select both start and end dates.', {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
            })
        }
        console.log(pickup);

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
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h1 className='font-semibold pb-2'>Select Your Expected Delivery Date:</h1>
                    <label htmlFor="">Submitting Date: </label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        customInput={customInput}
                        readOnly
                        className='border-2 p-1 mb-4 rounded-md'
                    />
                    <br />
                    <label htmlFor="">Delivery Date: </label>
                    <DatePicker
                        className='border-2 p-1 mb-4 rounded-md'
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        minDate={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Select end date"
                    />
                    <br />
                    <h1 className='bg-sky-500 w-1/2 text-xl p-2 rounded-md text-white text-center cursor-pointer' onClick={calculateDateDifference}>Confirm Picking Date</h1>
                    <div className="modal-action">                       
                        <button className="btn bg-red-500">Close</button>
                    </div>
                </form>
            </dialog>
            <button className="control-button" onClick={() => window.my_modal_1.showModal()}>Select Delivery Date</button>
        </div>
    );
};

export default PickDate;