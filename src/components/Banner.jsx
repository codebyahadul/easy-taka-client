import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BiSend } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";
import Cashback from '../assets/cashback.png';
const Banner = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1 className="text-lg md:text-xl font-medium my-3 md:my-5">Top Services:</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 md:gap-8 *:border-2 *:rounded-md *:w-[100px] *:md:w-[200px] *:lg:w-[250px] *:h-[80px] *:p-3 *:md:p-5 *:cursor-pointer *:flex *:items-center">
                <div className="hover:bg-gray-200">
                    <button className="flex items-center gap-2 text-xs md:text-sm lg:text-lg font-medium">
                        <BiSend size={20} />Send Money
                    </button>
                </div>
                <div className="hover:bg-gray-200">
                    <button className="flex items-center gap-2 text-xs md:text-sm lg:text-lg font-medium">
                        <IoCashOutline size={20} /> Cash Out
                    </button>
                </div>
                <div className="hover:bg-gray-200">
                    <button className="flex items-center gap-2 text-xs md:text-sm lg:text-lg font-medium">
                        <IoCashOutline size={20} /> Mobile Recharge
                    </button>
                </div>
                <div className="hover:bg-gray-200">
                    <button className="flex items-center gap-2 text-xs md:text-sm lg:text-lg font-medium">
                        <IoCashOutline size={20} /> Add Money
                    </button>
                </div>
            </div>
            <div>
                <h1 className="text-lg md:text-xl font-medium my-3 md:my-5">Popular Offers: </h1>
                <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 md:gap-10">
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

export default Banner;