import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Register = () => {
  const navigate = useNavigate()
  const {register} = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;
    if (/^\d{5}$/.test(password) != true) {
      return alert("Password must be 5 digit")
    }
      const userInfo = {
        name,
        mobile,
        email,
        password,
        role: 'user',
        status: 'pending'
      }
      const {data} = await axios.post('http://localhost:5000/register', userInfo)
      if(data.insertedId){
        register({status:true})
        navigate('/')
        alert('successfully register')
      }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-md rounded p-6 space-y-6">
          <h2 className="text-xl font-semibold text-center">Register</h2>
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
              placeholder="PIN (must be number)"
              required
              name="password"
              className="w-full py-2 px-4 border rounded focus:outline-none"
            />
            <button type="submit" className="w-full py-2 px-4 text-white bg-gray-600 rounded hover:bg-gray-800 focus:outline-none">
              Register
            </button>
          </form>
          <p className="text-sm">Already have an account? <Link to='/login' className="text-gray-500 font-semibold hover:text-red-400"> Login Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;