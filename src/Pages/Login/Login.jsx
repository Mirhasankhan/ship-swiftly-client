import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signIn, resetPassword } = useAuth()
    const [show, setShow] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                toast.success('LoggedIn successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
                navigate(from, { replace: true })
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
        reset()
    };

    const handleResetPassword = () => {
        const email = watch("email")
        if (!email) {
            toast.error("Please provide email to reset password", {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
            })
            return
        }
        resetPassword(email)
            .then(() => {
                toast.success('Check Your Email To Reset Password', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white', padding: '10px', fontWeight: 'bold' }
                });
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
                })
            })
    }
    return (
        <div className='py-10'>
            <div className='md:w-1/3 mx-3 md:mx-auto bg-white rounded-lg p-3 border-2'>
                <h1 className='font-semibold text-2xl text-center'>Login To Ship<span className='text-sky-400'>Swiftly</span></h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Type Your Email" className="input-design" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type={show ? "password" : "text"} placeholder="Type Your Password" className="input-design" />
                        {errors.password && <span className="text-red-600">Password is required</span>}
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <span>
                                {
                                    show ? <div onClick={() => setShow(!show)} className='flex items-center'><FaEye className=' mr-1 text-xl'></FaEye> <small>Show password</small></div> :
                                        <div onClick={() => setShow(!show)} className='flex items-center'><FaEyeSlash className='mr-1 text-xl'></FaEyeSlash> <small>Hide Password</small></div>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="continue-button cursor-pointer" type="submit" value="Login" />
                    </div>
                </form>

                <h1>Didn't have an account? <Link className='text-blue-600' to="/signUp">Sign Up</Link></h1>
                <div className="divider">Or</div>
                <SocialLogin></SocialLogin>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;