import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosCommon from '../hooks/userAxiosCommon';
const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext);
  const axiosCommon = useAxiosCommon()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;
    const accountType = form.accountType.value;
    if (/^\d{5}$/.test(password) != true) {
      return alert("Password must be 5 digit")
    }
    const userInfo = {
      name,
      mobile,
      email,
      password,
      role: accountType,
      status: 'pending',
      balance: accountType == 'user' ? 40 : 10000,
    }
    const { data } = await axiosCommon.post('http://localhost:5000/register', userInfo)
    if (data.insertedId) {
      register({ status: true, mobile, email })
      navigate('/')
      toast.success('successfully register')
    }
  };
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-170px)] flex items-center justify-center">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-md rounded p-6 space-y-6">
          <h2 className="text-xl font-semibold text-center">Create Account</h2>
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
            <div className='flex items-center gap-5 *:cursor-pointer text-gray-400'>
            <h4 className='font-semibold text-gray-600'>Account type: </h4>
              <input type="radio" name="accountType" id="user" value={'user'}/>
              <label htmlFor="user">User</label>
              <input type="radio" name="accountType" id="agent" value={'agent'} />
              <label htmlFor="agent">Agent</label>
            </div>
            <button type="submit" className="w-full py-2 px-4 text-white bg-gray-600 rounded hover:bg-gray-800 focus:outline-none">
              Create Account
            </button>
          </form>
          <p className="text-sm">Already have an account? <Link to='/login' className="text-gray-500 font-semibold hover:text-red-400"> Login Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;