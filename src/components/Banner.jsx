import useRole from "../hooks/useRole";
import AdminPage from "./Admin/AdminPage";
import UserPage from "./User/UserPage";
const Banner = () => {
    const [role] = useRole()
    return (
        <>
            {
                role === 'user' && <UserPage />
            }
            {
                role === 'admin' && <AdminPage />
            }
        </>
    );
};

export default Banner;