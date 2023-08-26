import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/> 
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />                
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;