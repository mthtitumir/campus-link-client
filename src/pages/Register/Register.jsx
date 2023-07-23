import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/Authprovider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photo };
                        axios.post('http://localhost:8000/users', savedUser)
                            .then(response => {
                                console.log('Data posted:', response.data);
                                if (response.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User created successfully.',

                                    });
                                    navigate('/');
                                }
                            })

                    })

            })
    };
    return (
        <div className='p-5 md:p-2 flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-4 p-4 rounded shadow">
                <h2 className="text-3xl font-semibold mb-4 text-center">Create an Account</h2>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="name">
                        Name:
                    </label>
                    <input {...register('name')} id="name" placeholder='Your Name' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="email">
                        Email:
                    </label>
                    <input {...register('email')} id="email" placeholder='Your Email' type="email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="photo">
                        Photo URL:
                    </label>
                    <input {...register('photo')} id="photo" placeholder='Your Photo URL' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4 px-5">
                    <label className="block mb-1" htmlFor="password">
                        Password:
                    </label>
                    <input {...register('password' )} id="password" placeholder='Your Password' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className='text-center'>
                    <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Register</button>
                </div>
                <p className="mt-2 px-5 text-center">
                    Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
                </p>
            </form>
        </div>
    );
};

export default Register;