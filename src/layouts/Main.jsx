import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-129px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;