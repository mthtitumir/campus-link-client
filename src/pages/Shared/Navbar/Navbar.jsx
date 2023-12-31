import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/Authprovider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Logged out successfully!'
                )
            })
    }
    const options = <>
        <li className='text-base font-semibold'><Link to='/colleges'>Colleges</Link></li>
        <li className='text-base font-semibold'><Link to='/admission'>Admission</Link></li>
        <li className='text-base font-semibold'><Link to='/my-colleges'>My College</Link></li>
    </>
    return (
        <div className="navbar p-0 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {options}
                    </ul>
                </div>
                <Link to='/' className="text-xl font-semibold">Campus Link</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="form-control">
                    <input type="text" placeholder="Search college" className="border rounded-lg py-1 pl-3 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full" title={user? user.name : 'Profile'}>
                            <img src={user?user.photoURL: "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        {
                            user?
                            <li onClick={handleLogout}><a>Logout</a></li> 
                            :
                            <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
