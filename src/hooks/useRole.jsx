import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./userAxiosCommon";
import useAuth from "./useAuth";

const useRole = () => {
    const axiosCommon = useAxiosCommon()
    const {user} = useAuth()
    const { data = {}, isLoading } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/user/${user?.email ? user?.email: user?.mobileOrEmail}`)
            return data
        }
    })
    const role = data?.role;
    const status = data?.status;
    return [role,status, isLoading]
};

export default useRole;