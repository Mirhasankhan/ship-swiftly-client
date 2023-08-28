import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../assets/errorImage2.png'

const ErrorRoute = () => {
    const { error } = useRouteError();
    return (
        <div className='flex justify-center items-center mt-14'>
            <div className='flex flex-col items-center'>
                <img className='h-48 rounded-lg mb-3' src={errorImage} alt="" />
                <p className='text-xl'>{error.message}</p>
                <Link to="/"> <button className="control-button mt-3">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorRoute;