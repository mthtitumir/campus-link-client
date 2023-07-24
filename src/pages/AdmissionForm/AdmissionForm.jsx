import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useColleges from '../../useHooks/useColleges';

const AdmissionForm = () => {
    const [colleges] = useColleges();
    const {id} = useParams();
    const appliedCollege = colleges.find(college => college.college_id == id);
    // console.log(appliedCollege.college_name);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const savedUser = { name: data.name, email: data.email, photo: data.photo, phone: data.phone, address: data.address, birth:data.birth, subject: data.subject, college: data.college,  };
        axios.post('http://localhost:8000/carts', savedUser)
            .then(response => {
                console.log('Data posted:', response.data);
                if (response.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Applied successfully.',

                    });
                }
            })
    };
    return (
        <div className='p-5 md:p-2 flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-4 p-4 rounded shadow">
                <h2 className="text-3xl font-semibold mb-4 text-center">Apply For Admission</h2>

                <div className='flex'>
                    <div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="name">
                                Candidate Name:
                            </label>
                            <input {...register('name')} id="name" placeholder='Candidate Name' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="email">
                                Candidate Email:
                            </label>
                            <input {...register('email')} id="email" placeholder='Candidate Email' type="email" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="phone">
                                Candidate Phone:
                            </label>
                            <input {...register('phone')} id="phone" placeholder='Candidate phone' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="address">
                                Candidate Address:
                            </label>
                            <input {...register('address')} id="address" placeholder='Candidate address' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="birth">
                                Candidate Date of Birth:
                            </label>
                            <input {...register('birth')} id="birth" placeholder='Candidate Date of Birth' type="date" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="subject">
                                Subject:
                            </label>
                            <input {...register('subject')} id="subject" placeholder='Subject' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="photo">
                                Candidate Photo URL:
                            </label>
                            <input {...register('photo')} id="photo" placeholder='Candidate Photo URL' type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4 px-5">
                            <label className="block mb-1" htmlFor="college">
                                Applied College:
                            </label>
                            <input {...register('college')} id="college" placeholder='Applied College' readOnly defaultValue={appliedCollege.college_name} type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                </div>


                <div className='text-center'>
                    <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Register</button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;