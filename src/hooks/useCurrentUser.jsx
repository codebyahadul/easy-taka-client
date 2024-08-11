import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCurrentUser = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: currentUser = {}, refetch } = useQuery({
        queryKey: ['user', 'profile', `${user?.mobile}`],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.mobile ? user?.mobile: user?.email}`)
            return data;
        }
    })
    return [currentUser, refetch]
};

export default useCurrentUser;