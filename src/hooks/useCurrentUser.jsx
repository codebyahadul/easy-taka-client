import{ useContext } from 'react';
import useAxiosCommon from './userAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useCurrentUser = () => {
    const axiosCommon = useAxiosCommon()
    const {user} = useContext(AuthContext)
    const {data: currentUser = {}, refetch} = useQuery({
        queryKey: ['user', 'profile', `${user?.mobileOrEmail}`],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/user/${user?.mobileOrEmail}`)
            return data;
        }
    })
    return [currentUser, refetch]
};

export default useCurrentUser;