import { useForm } from "react-hook-form";
import Loading from "../../components/ui/Loading";
import { useGetMyBookingsQuery } from "../../redux/api/bookingApi";
import { useGetAUserQuery, useUpdateAUserMutation } from "../../redux/api/userApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const MyProfile = () => {
    const { data: userData, isLoading: userLoading } = useGetAUserQuery(undefined);
    const { data: bookingData, isLoading: bookingDataLoading } = useGetMyBookingsQuery(undefined);
    const [updateAUser, { isLoading: updateUserLoading, data: updatedUser, isSuccess }] = useUpdateAUserMutation();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        if (isSuccess) {
            toast.success("User Update Successfully.", 'updateUser')
        }
    }, [ isSuccess]);
    if (userLoading || bookingDataLoading) return <Loading />

    const user = userData?.data;
    const onSubmit = (data) => {
        // Handle form submission, e.g., send data to the backend
        delete data.email
        console.log(data)
        updateAUser(data)
    };
    console.log('updatedUser', bookingData)
    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-6">Profile Overview</h2>

            {/* Personal Information Section */}

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div>
                            <label className="font-medium text-gray-600">Name:</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                defaultValue={user?.name}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="font-medium text-gray-600">Email:</label>
                            <input

                                disabled
                                defaultValue={user?.email}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md cursor-not-allowed"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label className="font-medium text-gray-600">Phone:</label>
                            <input
                                {...register("phone", { required: "Phone number is required" })}
                                defaultValue={user?.phone}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>

                        {/* Address Field */}
                        <div>
                            <label className="font-medium text-gray-600">Address:</label>
                            <input
                                {...register("address", { required: "Address is required" })}
                                defaultValue={user?.address}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your address"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <input
                            value={updateUserLoading ? "Updating...." : 'Update Profile'}
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                        />
                    </div>
                </form>
            </div>

            {/* Booking History Section */}
           {
            userInfo.role ==='user' && <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Booking History</h3>

            {/* Booking History Table */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Booking ID</th>
                        <th className="py-2 px-4 border-b">Car</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Total Cost</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                 <tbody>
                    {bookingData.map((booking) => (
                        <tr key={booking._id} className="text-center">
                            <td className="py-2 px-4 border-b">{booking._id}</td>
                            <td className="py-2 px-4 border-b">{booking.car.name}</td>
                            <td className="py-2 px-4 border-b">{booking.date}</td>
                            <td className="py-2 px-4 border-b">${booking.totalCost}</td>
                            <td className="py-2 px-4 border-b">
                                <span className={`px-2 py-1 rounded text-sm font-semibold ${booking.status === 'completed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {booking.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
           }
        </div>
    );
};

export default MyProfile;
