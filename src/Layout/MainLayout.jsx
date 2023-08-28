import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import spinner from '../assets/spinner.json'

const MainLayout = () => {
    const { loading } = useAuth()
    return (loading ? <div className='flex justify-center items-center'><Lottie style={{ height: '400px', width: '600px' }} animationData={spinner} loop={true} /> </div> :
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;