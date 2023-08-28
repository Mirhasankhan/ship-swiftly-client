import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import ShippingRow from "./ShippingRow";

const MyShippings = () => {
    const { user } = useAuth()
    const { data: currentUser = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/shippings?email=${user?.email}`)
            return res.json()
        }
    })
    console.log(currentUser);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Parcel Image</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Parcel Type</th>
                            <th>Floor Cost</th>
                            <th>Picking Cost</th>
                            <th>Distance Cost</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        currentUser.map(ship => <ShippingRow key={ship._id} ship={ship}></ShippingRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyShippings;