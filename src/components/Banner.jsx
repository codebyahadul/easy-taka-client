import useRole from "../hooks/useRole";
import AdminPage from "../pages/Admin/AdminPage";
import AgentPage from "../pages/Agent/AgentPage";
import UserPage from "../pages/User/UserPage";
import WaitingPage from "../pages/WaitingPage";
const Banner = () => {
    const [role, status] = useRole()
    if (status === 'pending') {
        return <WaitingPage />
    }
    return (
        <>
            {
                role == 'user' && <UserPage />
            }
            {
                role === 'admin' && <AdminPage />
            }
            {
                role === 'agent' && <AgentPage />
            }
        </>
    );
};

export default Banner;