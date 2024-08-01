import { BiSend } from 'react-icons/bi';
import { FaAddressCard, FaHandHoldingUsd, FaLightbulb } from 'react-icons/fa';
import { IoBook, IoCashOutline } from 'react-icons/io5';
import { SiRemedyentertainment } from 'react-icons/si';
import { TbRecharging } from 'react-icons/tb';
import Cashback from '../../assets/cashback.png';
import { Link } from 'react-router-dom';
const UserPage = () => {
    return (
        <div>
            <h1 className="text-lg md:text-xl font-medium my-3 md:my-5">Top Services:</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 md:gap-8 *:border-2 *:rounded-md *:w-[100px] *:md:w-[200px] *:lg:w-[200px] *:h-[110px] *:p-3 *:md:p-5 *:cursor-pointer *:flex *:items-center *:flex-col *:justify-center *:gap-1">

                <Link to='/sendMoney' className="hover:bg-gray-200">
                    <BiSend size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">Send Money </button>
                </Link>
                <Link to='/cashOut' className="hover:bg-gray-200">
                    <IoCashOutline size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Cash Out
                    </button>
                </Link>
                <Link to='/mobileRecharge' className="hover:bg-gray-200">
                    <TbRecharging size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Mobile Recharge
                    </button>
                </Link>
                <Link to="/addMoney" className="hover:bg-gray-200">
                    <FaAddressCard size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Add Money
                    </button>
                </Link>
                <Link to='/payBill' className="hover:bg-gray-200">
                    <FaLightbulb size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Pay Bill
                    </button>
                </Link>
                <Link to='remittance' className="hover:bg-gray-200">
                    <SiRemedyentertainment size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Remittance
                    </button>
                </Link>
                <div className="hover:bg-gray-200">
                    <IoBook size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Education Fee
                    </button>
                </div>
                <div className="hover:bg-gray-200">
                    <FaHandHoldingUsd size={30} />
                    <button className="text-xs md:text-sm lg:text-lg font-medium">
                        Loan
                    </button>
                </div>
            </div>
            <div>
                <h1 className="text-lg md:text-xl font-medium my-3 md:my-5">Popular Offers: </h1>
                <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 md:gap-10">
                    {/* this offer only for user */}<div className="w-full max-w-[340px] space-y-3 rounded-xl bg-gray-100 p-4 shadow-lg">
                        <div className=" flex h-40 w-full justify-center lg:h-[260px]">
                            <img width={260} height={260} className="h-full w-full rounded-lg " src={Cashback} alt="offer img" />
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-sm md:text-base lg:text-lg">100 tk Cashback</h6>
                            <p className="text-xs font-semibold text-gray-500 md:text-sm">Add 5000 or more money from any bank and get the cashback</p>
                        </div>
                    </div>
                    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-gray-100 p-4 shadow-lg">
                        <div className=" flex h-40 w-full justify-center lg:h-[260px]">
                            <img width={260} height={260} className="h-full w-full rounded-lg " src={Cashback} alt="offer img" />
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-sm md:text-base lg:text-lg">100 tk Cashback</h6>
                            <p className="text-xs font-semibold text-gray-500 md:text-sm">Add 5000 or more money from any bank and get the cashback</p>
                        </div>
                    </div>
                    <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-gray-100 p-4 shadow-lg">
                        <div className=" flex h-40 w-full justify-center lg:h-[260px]">
                            <img width={260} height={260} className="h-full w-full rounded-lg " src={Cashback} alt="offer img" />
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-sm md:text-base lg:text-lg">100 tk Cashback</h6>
                            <p className="text-xs font-semibold text-gray-500 md:text-sm">Add 5000 or more money from any bank and get the cashback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;