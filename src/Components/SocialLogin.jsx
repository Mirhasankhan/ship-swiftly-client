import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                const insertUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('https://music-instrument-learning-server-seven.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(insertUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success('LoggedIn successfully', {
                            position: 'top-right',
                            style: { backgroundColor: 'blue', color: 'white' }
                        })
                        navigate(from, { replace: true })
                    })

            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Login With Google</button>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;