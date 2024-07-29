import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosCommon from "../../hooks/userAxiosCommon";
import toast from "react-hot-toast";

const AdminPage = () => {
    const [seeUsers, setSeeUsers] = useState(true)
    const [seeTransactions, setSeeTransactions] = useState(false)
    const axiosCommon = useAxiosCommon()
    // get all the users
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/users')
            return data;
        },
    })
    // handle confirmed
    const handleConfirmed = async (mobile) => {
        const { data } = await axiosCommon.patch(`/user/update/${mobile}`, {
            status: 'confirmed',
            balance: 40,
        })
        if(data.modifiedCount){
            toast.success('User Activated successfully')
            refetch()
        }
    }
    return (
        <div>
            <div className="text-center text-sm md:text-sm">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Welcome Easy Taka Admin Page ❤️‍🩹❤️‍🩹</h1>
                <p>Here you can manage the Easy Taka's users and see their transactions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center my-2">
                <button onClick={() => {
                    setSeeUsers(true)
                    setSeeTransactions(false)
                }
                } className={`inline-flex h-9 items-center justify-center rounded-md ${seeUsers ? 'bg-gray-900' : ''} px-4 py-2 text-sm font-medium ${seeUsers ? 'text-white' : 'text-black'} shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50`}>See Users</button>
                <button onClick={() => {
                    setSeeTransactions(true)
                    setSeeUsers(false)
                }} className={`inline-flex h-9 items-center justify-center rounded-md ${seeTransactions ? 'bg-gray-900' : ''} px-4 py-2 text-sm font-medium ${seeTransactions ? 'text-white' : 'text-black'} shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50`}>See Transactions</button>
            </div>
            <div className="overflow-x-auto">
                {/* All users */}
                {seeUsers && <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-gray-400 text-white *:py-4 *:px-6 *:text-sm *:lg:text-lg *:text-left *:border-b">
                            <th>User Email</th>
                            <th>User Phone</th>
                            <th>User Role</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={user?._id} className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-xs *:md:text-sm *:lg:text-lg font-medium">
                                    <td>{user?.email ? user?.email : 'Not Found'}</td>
                                    <td>{user?.mobile}</td>
                                    <td>{user?.role}</td>
                                    <td>{user?.status}</td>
                                    <td className="flex gap-1">
                                        <button onClick={() => handleConfirmed(user.mobile)} disabled={user.role === 'admin' || user.status === 'confirmed'} className="bg-green-500 text-white text-sm py-1 px-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50">Activated</button>
                                        <button disabled={user.role === 'admin'} className="bg-red-600 text-white text-sm py-1 px-2 rounded-md disabled:cursor-not-allowed">Blocked</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>}

                {/* Transactions */}
                {seeTransactions && <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-gray-400 text-white *:py-4 *:px-6 *:text-sm *:lg:text-lg *:text-left *:border-b">
                            <th>User Email</th>
                            <th>User Phone</th>
                            <th>Transactions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-xs *:md:text-sm *:lg:text-lg font-medium">
                            <td>something</td>
                            <td>Dual Speaker</td>
                            <td>Dual Speaker</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default AdminPage;