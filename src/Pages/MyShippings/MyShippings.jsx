import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import ShippingRow from "./ShippingRow";

const MyShippings = () => {
    const { user } = useAuth()
    const { data: currentUser = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://ship-swiftly-server.vercel.app/shippings?email=${user?.email}`)
            return res.json()
        }
    })
    console.log(currentUser);
    return (
        <div>
            {
                currentUser.length > 0 ? <div className="overflow-x-auto">
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
            </div> : <p className="text-center mt-16 text-4xl font-semibold">No Shipping Found</p>
            }
        </div>
    );
};

export default MyShippings;