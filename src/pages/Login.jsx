/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const mobileOrEmail = form.mobileOrEmail.value;
    const password = form.password.value;
    const userInfo = {
      mobileOrEmail,
      password
    }
    try {
      const {data} = await axios.post('http://localhost:5000/login', userInfo)
    if(data.message === true){
      navigate('/')
      toast.success("log in successfully")
      login({status: true, mobileOrEmail})
    }
    } catch (error) {
      toast.error("Invalid credentials. Please enter the correct email and password")
    }
    
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-170px)] flex items-center justify-center">
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
          <p className="text-sm">Don't have an account? <Link to='/register' className="text-gray-500 font-semibold hover:text-red-400"> Register Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
