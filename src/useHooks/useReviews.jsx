import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import axios from 'axios';

const useReviews = () => {
    const { loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        enabled: loading,
        queryFn: async () => {
            const res = await axios.get('https://campus-link-server-six.vercel.app/reviews')
            // console.log(res);
            return res.data;
        }
    })
    return [reviews, refetch]
};

export default useReviews;