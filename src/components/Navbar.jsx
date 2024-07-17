import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center">
          <Link to='/' className="text-xl md:text-2xl lg:text-4xl font-bold">EasyTaka</Link>
          <ul className="flex items-center gap-3 md:gap-5 text-sm md:text-lg font-medium *:cursor-pointer">
            <li className="group flex flex-col">
              Services<span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex flex-col">
              About Us<span className="mt-[1px] h-[3px] w-[0px] rounded-full bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;