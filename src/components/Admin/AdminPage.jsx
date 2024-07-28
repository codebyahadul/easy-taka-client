import axios from "axios";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const [seeUsers, setSeeUsers] = useState(true)
    const [seeTransactions, setSeeTransactions] = useState(false)
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/users')
            setUsers(data)
        };
        fetchData()
    }, [seeUsers])
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
                        <tr className="bg-gray-400 text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">User Email</th>
                            <th className="py-4 px-6 text-lg text-left border-b">User Phone</th>
                            <th className="py-4 px-6 text-lg text-left border-b">User Role</th>
                            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => {
                                <tr key={user?._id} className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-sm *:md:text-lg *:lg:text-xl font-medium">
                                    <td>{user?.email ? user?.email : 'Not Found'}</td>
                                    <td>{user?.mobile}</td>
                                    <td>{user?.role}</td>
                                    <td className="text-end">
                                        <button className="bg-gray-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>}

                {/* Transactions */}
                {seeTransactions && <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-gray-400 text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">User Email</th>
                            <th className="py-4 px-6 text-lg text-left border-b">User Phone</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Transactions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300 *:py-4 *:px-6 *:border-b *:text-sm *:md:text-lg *:lg:text-xl font-medium">
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