/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosCommon from "../../hooks/userAxiosCommon";
import toast from "react-hot-toast";

const AdminPage = () => {
    const [seeUsers, setSeeUsers] = useState(true)
    const [seeTransactions, setSeeTransactions] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [confirmedBlocked, setConfirmedBlocked] = useState(false)
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
        })
        if (data.modifiedCount) {
            toast.success('User Activated successfully')
            refetch()
        }
    }
    const handleBlocked = async (mobile) => {
        setOpenModal(true)
        if (confirmedBlocked) {
            console.log('vitore asce');
            const { data } = await axiosCommon.patch(`/user/update/${mobile}`, {
                status: 'blocked',
            })
            if (data.modifiedCount) {
                toast.success('User blocked successfully')
                refetch()
            }
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
                                        {/* activate button */}
                                        <button onClick={() => handleConfirmed(user?.mobile)} disabled={user.role === 'admin' || user.status === 'confirmed'} className="bg-green-500 text-white text-sm py-1 px-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50">Activated</button>
                                        {/* blocked button */}
                                        <button onClick={() => handleBlocked(user?.mobile)} disabled={user.role === 'admin'} className="bg-red-600 text-white text-sm py-1 px-2 rounded-md disabled:cursor-not-allowed">Blocked</button>
                                        <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-gray-400/20 backdrop-blur-sm duration-100`}>
                                            <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-gray-200 p-6 text-center drop-shadow-2xl  ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                                                <div className="flex flex-col items-center justify-center space-y-4">
                                                    <svg className="w-16 stroke-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path opacity="0.4" d="M12 7.75V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity="0.4" d="M12 16.2002V16.3002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                                    <h6 className="text-center text-sm font-medium opacity-70">Are you sure you want to block the user !!</h6>
                                                    <div className='flex gap-2'>
                                                        <button onClick={() => setConfirmedBlocked(true)} className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white">
                                                            Yes Block
                                                        </button>
                                                        <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white">
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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