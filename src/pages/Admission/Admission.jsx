import React from 'react';
import useColleges from '../../useHooks/useColleges';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges] = useColleges();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Admission Dates</th>
                            <th>Apply for Admission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map((college, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{college.college_name}</td>
                                <td>{college.admission_dates}</td>
                                <Link to={`/admission/${college.college_id}`}>
                                    <td><div className="badge badge-primary badge-outline">Apply</div></td>
                                </Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;