
const Profile = () => {
    return (
        < >
            <div className="max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md  md:max-w-[350px] lg:max-w-[400px] mx-auto">
                {/* profile image & bg  */}
                <div className="relative ">
                    <img width={350} height={150} className="h-[150px] w-[350px] rounded-2xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACUCAMAAACX8CSrAAAAA1BMVEWpqamhHEfZAAAAOklEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDOOzAABue6ytgAAAABJRU5ErkJggg==" alt="banner img" />
                    <img width={100} height={100} className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400" src="https://source.unsplash.com/100x100/?men" alt="profile img" />
                </div>
                {/* profile name & role */}
                <div className="space-y-1 pt-8 text-center">
                    <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
                    <p className="text-sm text-gray-400">Normal User</p>
                </div>
                {/* post , followers following  */}
                <div className=" px-4 space-y-2">
                    <h1 className="text-lg md:text-xl font-medium text-gray-400">Recent Activity: </h1>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="text-center">
                            <h5 className="text-xl font-medium">170 tk</h5>
                            <p className="text-sm text-gray-400">Send Money</p>
                        </div>
                        <div className="text-center">
                            <h5 className="text-xl font-medium">200 tk</h5>
                            <p className="text-sm text-gray-400">Add Money</p>
                        </div>
                        <div className="text-center">
                            <h5 className="text-xl font-medium">217 tk</h5>
                            <p className="text-sm text-gray-400">Cash Out</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 bg-gray-800 hover:bg-gray-400 hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Update Profile</button>
                </div>
            </div>
        </>
    );
};

export default Profile;