import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import axios from 'axios';

const useMyColleges = () => {
    const { loading } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const { data: myColleges = [], refetch } = useQuery({
        queryKey: ['myColleges'],
        enabled: loading,
        queryFn: async () => {
            const res = await axios.get(`https://campus-link-server-six.vercel.app/carts?email=${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
    return [myColleges, refetch]
};

export default useMyColleges;