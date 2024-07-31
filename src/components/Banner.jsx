import useRole from "../hooks/useRole";
import AdminPage from "../pages/Admin/AdminPage";
import UserPage from "../pages/User/UserPage";
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