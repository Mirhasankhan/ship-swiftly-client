import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaUserAlt, FaBookmark, FaFilePdf, FaQuestionCircle, FaSlidersH, FaBars, FaTimes, FaHome, FaUserAltSlash } from 'react-icons/fa';import { toast } from 'react-hot-toast';
import logo from '../../assets/ship.jpg'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    const [detail, setDetail] = useState(false)
    const [smDevice, setSmDevice] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(() => {
                setDetail(false)
                toast.error("Logout Successfully", {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
            .catch(() => { })
    }
    return (
        <div className='relative bg-slate-400'>
            <div>
                <div className="navbar md:px-12">
                    <div className="flex-1">
                        <img className='rounded-full h-12 md:h-16 mr-2' src={logo} alt="" />
                        <Link to="/"><h1 className='font-semibold text-3xl'>Ship<span className='text-sky-400'>Swiftly</span></h1></Link>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="menu menu-horizontal px-1 items-center font-semibold gap-5 text-xl text-white">
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/myShippings">My Shippings</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/aboutUs">About Us</NavLink>                            
                            
                            {
                                user?.email ? <img onClick={() => setDetail(!detail)} className='rounded-full h-16 md:h-10 w-10 text-black cursor-pointer' src={user?.photoURL} alt="" /> : <NavLink to="/login"><button className='control-button'>Login</button></NavLink>
                            }
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        {
                            smDevice ? <FaTimes className='text-xl' onClick={() => setSmDevice(!smDevice)} /> : <FaBars className='text-xl' onClick={() => setSmDevice(!smDevice)} />
                        }
                        {
                            smDevice && <div className="flex-none">
                                <ul data-aos="fade-right" data-aos-duration="1000" className="menu absolute top-0 left-0 z-20 font-semibold py-6 gap-4 px-6  text-sky-500 bg-black">
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/"><div className='flex items-center gap-2 text-xl'><FaHome/>Home</div></NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/myShippings"><div className='flex items-center gap-2 text-xl'><FaUserAltSlash/>My Shippings</div> </NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/aboutUs"><div className='flex items-center gap-2 text-xl'><FaFilePdf/>About Us</div> </NavLink>                                  
                                    {
                                        user?.email ? <FaUserAlt onClick={() => setDetail(!detail)} className='text-white text-2xl cursor-pointer' /> : <NavLink to="/login"><button className='formal-button'>Login</button></NavLink>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {
                    detail && <div data-aos="fade-left" data-aos-duration="1000" className='absolute right-0 shadow-lg p-4 z-20 bg-sky-400'>
                        <h1 className='text-xl font-bold pb-3'>{user?.email}</h1>
                        <div className="cursor-pointer my-3">
                            <NavLink to="/profile" className="flex items-center gap-3"><FaFilePdf /><h1 className='font-thin' >Profile</h1></NavLink>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaBookmark /><h1 className='font-thin' >My Jobs</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer py-4">
                            <FaSlidersH /><h1 className='font-thin' >Settings</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaQuestionCircle /><h1 className='font-thin' >Help Center</h1>
                        </div>
                        <div className="divider"></div>
                        <button onClick={handleLogout} className='control-button'>Sign Out</button>
                    </div>
                }
            </div>            
        </div>
    );
};

export default Header;