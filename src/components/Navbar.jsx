
import User from '../assets/user.png';
const Navbar = () => {
    return (
        <div className="bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
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