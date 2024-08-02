import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">404</h1>
            <h3 className="text-lg md:text-xl font-semibold">Oops !! Page not found</h3>
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 ">
                <Link to='/'>Back to Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;