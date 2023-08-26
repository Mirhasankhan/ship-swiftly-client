import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SetDetails from "../Pages/Home/setDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Home/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/setDetails',
                element: <SetDetails/>
            },
            {
                path: '/payment',
                element: <Payment/>
            }
           
        ]
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router;