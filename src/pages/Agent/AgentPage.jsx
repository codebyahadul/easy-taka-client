import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

const AgentPage = () => {
    const [seeRequest, setSeeRequest] = useState(true)
    const [seeTransactions, setSeeTransactions] = useState(false)
    return (
        <div>
            <div className="text-center text-sm md:text-sm">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Welcome Easy Taka Agent Page ❤️‍🩹❤️‍🩹</h1>
                <p>Here you can see the cash out request and cash in request and manage this. You can also see your latest transaction history from here..</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center my-5">
                <button onClick={() => {
                    setSeeRequest(true)
                    setSeeTransactions(false)
                }
                } className={`inline-flex h-9 items-center justify-center rounded-md ${seeRequest ? 'bg-gray-900' : ''} px-4 py-2 text-sm font-medium ${seeRequest ? 'text-white' : 'text-black'} shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50`}>See CashOut Request</button>
                <button onClick={() => {
                    setSeeTransactions(true)
                    setSeeRequest(false)
                }} className={`inline-flex h-9 items-center justify-center rounded-md ${seeTransactions ? 'bg-gray-900' : ''} px-4 py-2 text-sm font-medium ${seeTransactions ? 'text-white' : 'text-black'} shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50`}>See Transactions</button>
            </div>
            <div className="overflow-x-auto">
                {
                    seeRequest && <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-gray-400 text-white *:py-4 *:px-6 *:text-sm *:lg:text-lg *:text-left *:border-b">
                                <th>User Phone</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-xs *:md:text-sm *:lg:text-lg font-medium">
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                                <td className="flex gap-3 items-center">
                                    <button className="px-1 py-1 border rounded-md bg-green-400">
                                        <IoCheckmark />
                                    </button>
                                    <button className="px-1 py-1 border rounded-md bg-red-500">
                                        <FaXmark />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
                {
                    seeTransactions && <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-gray-400 text-white *:py-4 *:px-6 *:text-sm *:lg:text-lg *:text-left *:border-b">
                                <th>User Phone</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Transaction Id</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-xs *:md:text-sm *:lg:text-lg font-medium">
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                                <td>Dual Speaker</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default AgentPage;
