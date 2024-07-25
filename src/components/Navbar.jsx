import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import User from '../assets/user.png';
const Navbar = () => {
  const { logout, user } = useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const handleLogOut = () => {
    logout()
  }
  const [dropDownState, setDropDownState] = useState(false);
  return (
    <div className="bg-white border-b">
      <div className="max-w-6xl mx-auto py-4 px-6 flex gap-2 justify-between items-center">
        <Link to='/' className="text-lg md:text-2xl lg:text-4xl font-bold">EasyTaka</Link>
        {
          user && <div onClick={() => setToggle(!toggle)} className="cursor-pointer px-1 border rounded-md text-xs md:text-sm lg:text-lg font-medium">
            {
              toggle ? <p>400.00 tk</p> : <button className="border-none">Check Balance</button>
            }
          </div>
        }
        {
          user ? <div  onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform">
            <img className="size-10 cursor-pointer" src={User} alt="img" />
            {dropDownState && (
              <ul className=" z-10 bg-gray-200 absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-center *:cursor-pointer">
                <li className="group flex flex-col pt-1 hover:bg-gray-100 rounded-t-lg ">
                  Profile<span className="mt-[1px] h-[3px] w-[0px] rounded-full "></span>
                </li>
                <li onClick={handleLogOut} className="group flex flex-col py-1 hover:bg-gray-100 rounded-b-lg ">
                  Log Out<span className="mt-[1px] h-[3px] w-[0px] rounded-full"></span>
                </li>
              </ul>
            )}
          </div> : <Link to='/login' className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50" href="#">
            Login
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;