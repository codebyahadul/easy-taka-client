import useCurrentUser from "../hooks/useCurrentUser";

const SendMoney = () => {
    const [currentUser] = useCurrentUser()
    const handleSendMoney = async e => {
        e.preventDefault()
        const form = e.target;
        const recipient = form.recipient.value;
        const amount = parseInt(form.amount.value);
        const password = form.password.value;
        const sendMoney = {
            recipient, amount, password
        }
        
    }
    console.log(currentUser.mobile);
    return (
        <div className="max-w-[300px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md  md:max-w-[350px] lg:max-w-[600px] mx-auto border-2">
            <form onSubmit={handleSendMoney} className="space-y-2">
                <label className="block text-lg font-medium">
                    Recipient:
                </label>
                <div>
                    <input type="text" name="recipient" placeholder="Enter recipient number" className="block w-full rounded-lg p-3  outline-none drop-shadow-md border-2 bg-white text-black" />
                </div>
                <label className="block text-lg font-medium">
                    Amount:
                </label>
                <div>
                    <input type="number" min={20} name="amount" placeholder="Enter amount" className="block w-full rounded-lg p-3  outline-none drop-shadow-md border-2 bg-white text-black" />
                </div>
                <label className="block text-lg font-medium">
                    Password:
                </label>
                <div>
                    <input type="password" name="password" placeholder="Enter password" className="block w-full rounded-lg p-3  outline-none drop-shadow-md border-2 bg-white text-black" />
                </div>
                <div>
                    <p className="text-xs md:text-sm">Your current balance is: <span className=" text-sm md:text-lg text-black font-medium">{currentUser?.balance}.00 tk</span></p>
                </div>
                <div className="flex justify-center pt-2">
                    <button type="submit" className="w-full md:w-[50%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 bg-gray-800 hover:bg-gray-400 hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Confirmed Send Money</button>
                </div>
            </form>
        </div>
    );
};

export default SendMoney;