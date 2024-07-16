import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobileOrEmail.value;
    const password = form.password.value;
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-138px)] flex items-center justify-center">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-md rounded p-6 space-y-6">
          <h2 className="text-xl font-semibold text-center text-blue-600">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="mobileOrEmail"
              placeholder="Mobile Number or Email"
              className="w-full py-2 px-4 border rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="PIN"
              name="password"
              className="w-full py-2 px-4 border rounded focus:outline-none"
            />
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              Log In
            </button>
          </form>
          <p className="text-sm">Don't have account? <Link to='/register' className="text-blue-500 font-semibold"> Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
