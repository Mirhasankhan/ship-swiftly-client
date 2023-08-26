import { Fade } from 'react-awesome-reveal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import CheckOutForm from '../../Components/CheckOutForm';


const striprePromise = loadStripe(import.meta.env.VITE_Stripe_Gateway_PK)

const Payment = () => {
    const location = useLocation()
    const uploadShipping = location?.state?.shippings

    return (
        <div className='px-8'>
            <div className='w-1/2 mx-auto my-8 border-b-2 pb-3 text-center '>
                <h1 className='animate__animated animate__backInRight  font-medium text-2xl md:text-3xl text-purple-600 '>Proceed Your Payment</h1>
                <Fade delay={1e3} cascade damping={1e-1}>
                    Enrolled Classes For You
                </Fade>
            </div>
            <Elements stripe={striprePromise}>
                <CheckOutForm uploadShipping={uploadShipping}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;