import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import axios from 'axios';

const useColleges = () => {
    const { loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    const { data: colleges = [], refetch } = useQuery({
        queryKey: ['colleges'],
        enabled: loading,
        queryFn: async () => {
            const res = await axios.get('https://campus-link-server-six.vercel.app/colleges')
            // console.log(res);
            return res.data;
        }
    })
    return [colleges, refetch]
};

export default useColleges;