import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import useAxiosCommon from "../hooks/userAxiosCommon";
import { FaSpinner } from "react-icons/fa";
import useCurrentUser from "../hooks/useCurrentUser";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Img')
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const axiosCommon = useAxiosCommon()
    const {user} = useContext(AuthContext)
    // get current user
    const [currentUser, refetch] = useCurrentUser()

    const handleImageChange = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        try {
            setLoading(true)
            // upload the image
            const formData = new FormData()
            formData.append('image', image)
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`,
                formData
            )
            const img_url = data.data.display_url;
            const updateProfile = { name, img_url }
            const { data: update } = await axiosCommon.patch(`/user/update/${user?.mobileOrEmail}`, updateProfile)
            if (update.modifiedCount) {
                setLoading(false)
                setOpenModal(false)
                toast.success('Profile information update successfully')
                refetch()
            }
            // update the user info
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        < >
            <div className="max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md  md:max-w-[350px] lg:max-w-[400px] mx-auto">
                {/* profile image & bg  */}
                <div className="relative ">
                    <img width={350} height={150} className="h-[150px] w-[350px] rounded-2xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACUCAMAAACX8CSrAAAAA1BMVEWpqamhHEfZAAAAOklEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDOOzAABue6ytgAAAABJRU5ErkJggg==" alt="banner img" />
                    <img width={100} height={100} className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400" src={currentUser?.img_url} alt="profile img" />
                </div>
                {/* profile name & role */}
                <div className="space-y-1 pt-8 text-center">
                    <h1 className="text-xl md:text-2xl">{currentUser?.name}</h1>
                    <p className="text-sm text-gray-400">Email: {currentUser.email}</p>
                    <p className="text-sm text-gray-400">Mobile: {currentUser.mobile}</p>
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
                    <button onClick={() => setOpenModal(true)} className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 bg-gray-800 hover:bg-gray-400 hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Update Profile</button>
                </div>
            </div>
            <div className="mx-auto flex w-72 items-center justify-center">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-gray-200 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
                        <form
                            onSubmit={handleUpdate}
                            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                            <svg onClick={() => setOpenModal(false)} className="mx-auto mr-0 w-10 cursor-pointer fill-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></g></svg>
                            <h1 className="pb-8 text-2xl text-center font-medium backdrop-blur-sm">Update Profile Information</h1>
                            <div className="space-y-5">
                                <label className="block">
                                    Name:
                                </label>
                                <div className="relative">
                                    <input type="text" name="name" placeholder="Enter Your Name" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black" />
                                </div>
                                <label className="block">
                                    Upload Your Image:
                                </label>
                                <div className='flex items-center justify-around gap-4 p-4 bg-white w-full  m-auto rounded-lg'>
                                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                        <div className='flex flex-col w-max mx-auto text-center'>
                                            <label>
                                                <input
                                                    disabled={loading}
                                                    onChange={e => handleImageChange(e.target.files[0])}
                                                    className='disabled:cursor-not-allowed text-sm cursor-pointer w-36 hidden'
                                                    type='file'
                                                    name='image'
                                                    id='image'
                                                    accept='image/*'
                                                    hidden
                                                    required
                                                />
                                                <div className='bg-secondary text-black border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary'>
                                                    {imageText.split('.')[0].slice(0, 10) + '...' + imageText.split('.')[1]}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-24 h-20" src={imagePreview} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* button type will be submit for handling form submission*/}
                            <button disabled={loading} type="submit" className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 disabled:cursor-not-allowed">
                                {
                                    loading ? <FaSpinner className="animate-spin" /> : 'Update'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;