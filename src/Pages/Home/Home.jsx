import { Helmet } from "react-helmet-async";
import DistanceCosts from "./DistanceCosts";


const Home = () => {
    return (
        <div>
            <Helmet title="Home | ShipSwiftly"></Helmet>
            <DistanceCosts />
        </div>
    );
};

export default Home;