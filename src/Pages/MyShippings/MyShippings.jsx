import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import ShippingRow from "./ShippingRow";
import { Helmet } from "react-helmet-async";

const MyShippings = () => {
    const { user } = useAuth()
    const { data: currentUser = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://ship-swiftly-server.vercel.app/shippings?email=${user?.email}`)
            return res.json()
        }
    })
   
    return (
        <div className="mb-4">
            <Helmet>
                <title>My Shippings | ShipSwiftly</title>
            </Helmet>
            {
                currentUser.length > 0 ? <div className="overflow-x-auto">
                <h1 className="text-center font-semibold my-6 text-2xl md:text-4xl pb-4 border-b-2 border-purple-600 w-1/2 mx-auto ">My Shippings</h1>
                <table className="table table-zebra">                    
                    <thead className="bg-sky-400 text-black font-semibold">
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