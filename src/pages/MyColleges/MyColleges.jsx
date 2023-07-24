import React from 'react';
import useMyColleges from '../../useHooks/useMyColleges';
import { Link } from 'react-router-dom';

const MyColleges = () => {
    const [myColleges] = useMyColleges();
    console.log(myColleges);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>College Name</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myColleges.map((college, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{college.college}</td>
                                <Link>
                                    <td><div className="badge badge-primary badge-outline">Drop a Feedback</div></td>
                                </Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyColleges;