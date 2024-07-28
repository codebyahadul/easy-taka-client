import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const useRole = () => {
    const {user} = useContext(AuthContext)
    const [role, setRole] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`http://localhost:5000/user/${user?.mobile ? user?.mobile : user?.email}`)
            return setRole(data.role)
        }
        fetchData()
    }, [user, user.mobileOrEmail])
    return [role]
};

export default useRole;