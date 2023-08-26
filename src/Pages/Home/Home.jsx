import { Helmet } from "react-helmet-async";
import District from "./District";

const Home = () => {
    return (
        <div>
            <Helmet title="Home | ShipSwiftly"></Helmet>
           <District/>
        </div>
    );
};

export default Home;