
import User from '../assets/user.png';
const Navbar = () => {
    return (
        <div className="bg-white">
        <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center shadow-md border-b">
          <img src='' alt="EasyTak Logo" className="h-10" />
          <div className='border rounded-full cursor-pointer'>
            <img
              width={500}
              height={500}
              className="size-10 rounded-full bg-slate-500 object-cover"
              src={`${User}`}
              alt="avatar navigate ui"
            />
          </div>
        </div>
      </div>
    );
};

export default Navbar;