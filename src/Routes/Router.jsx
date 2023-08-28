import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SetDetails from "../Pages/Home/setDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Home/Payment";
import MyShippings from "../Pages/MyShippings/MyShippings";
import AboutUs from "../Pages/AboutUS/AboutUs";
import PrivateRoute from "./PrivateRoute";
import ErrorRoute from "./ErrorRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorRoute/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/setDetails',
                element: <PrivateRoute><SetDetails/></PrivateRoute>
            },            
            {
                path: 'myShippings',
                element: <MyShippings/>
            },
            {
                path: '/aboutUs',
                element: <AboutUs/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            },
           
        ]
    },    
    {
        path: '/payment',
        element: <Payment/>
    }
])

export default router;