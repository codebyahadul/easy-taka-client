const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const password = form.password.value;
      };
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-138px)] flex items-center justify-center">
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-md w-full bg-white shadow-md rounded p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center text-blue-600">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                className="w-full py-2 px-4 border rounded focus:outline-none"
              />
              <input
                type="text"
                name="mobile"
                required
                placeholder="Mobile Number"
                className="w-full py-2 px-4 border rounded focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full py-2 px-4 border rounded focus:outline-none"
              />
              <input
                type="password"
                placeholder="PIN"
                required
                name="password"
                className="w-full py-2 px-4 border rounded focus:outline-none"
              />
              <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                Register
              </button>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Register;