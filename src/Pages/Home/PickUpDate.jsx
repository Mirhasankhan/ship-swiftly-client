import { useEffect, useState } from "react";
import calculatePriorityCost from "../../Hooks/priority";

const PickUpDate = ({ setPickupCost }) => {
    const [pickup, setPickup] = useState('tomorrow')


    const handleSelect = (e) => {
        setPickup(e.target.value);

    }
    useEffect(() => {
        const priorityCost = calculatePriorityCost(pickup)
        setPickupCost(priorityCost)
    }, [pickup])


    return (
        <div>
            <div>
                <label className="font-semibold" htmlFor="">Pick Up Date : </label>
                <select onChange={handleSelect} className="border-2 p-1 my-2 rounded-md outline-green-400 w-1/2 block" name="parcel" id="parcel">
                    <option value="tomorrow">tomorrow</option>
                    <option value="3 days later">3 days Later</option>
                    <option value="10 days later">10 days later</option>
                </select>
            </div>
        </div>
    );
};

export default PickUpDate;