import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import axios from 'axios';

const useCarts = () => {
    const { loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts'],
        enabled: loading,
        queryFn: async () => {
            const res = await axios.get('https://campus-link-server-six.vercel.app/carts')
            // console.log(res);
            return res.data;
        }
    })
    return [carts, refetch]
};

export default useCarts;