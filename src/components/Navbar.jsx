import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const handleLogOut = () => {
    logout()
  }

  return (
    <div className="bg-white border-b">
      <div className="max-w-6xl mx-auto py-4 px-6 flex gap-2 justify-between items-center">
        <Link to='/' className="text-lg md:text-2xl lg:text-4xl font-bold">EasyTaka</Link>
        {
          user && <div onClick={() => setToggle(!toggle)} className="cursor-pointer px-1 border rounded-md text-xs md:text-sm lg:text-lg font-medium">
              {
                toggle ? <p>400.00 tk</p>: <button className="border-none">Check Balance</button>
              }
          </div>
        }
        <ul className="flex items-center gap-3 md:gap-5 text-xs md:text-sm lg:text-lg font-medium *:cursor-pointer">
          <li className="group flex flex-col">
            Services<span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {user &&
            <li onClick={handleLogOut} className="group flex flex-col">
              Log Out<span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;