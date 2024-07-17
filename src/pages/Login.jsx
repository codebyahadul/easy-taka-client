import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobileOrEmail.value;
    const password = form.password.value;
    
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold text-center">Log In</h2>
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
            <button type="submit" className="w-full py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-800 focus:outline-none">
              Log In
            </button>
          </form>
          <p className="text-sm">Don't have account? <Link to='/register' className="text-gray-500 font-semibold hover:text-red-400"> Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
