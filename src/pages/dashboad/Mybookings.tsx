import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import { useDeleteCarMutation, useGetCarsQuery } from "../../redux/api/carApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreateBookingPaymentMutation, useGetAllBookingsQuery, useGetMyBookingsQuery, useUpdateBookingMutation } from "../../redux/api/bookingApi";
import { useAppSelector } from "../../redux/hook";
export default function MyBookings() {

    const [details, setDetails] = useState({})
    const { data, isLoading, error: getError } = useGetMyBookingsQuery(undefined);
    const [updateBooking, { data: updatedData }] = useUpdateBookingMutation();
    const [createPayment, { data: paymentData, error: paymentError, isSuccess }] = useCreateBookingPaymentMutation()
    const { userId } = useAppSelector(state => state.auth)


    useEffect(() => {
        if (paymentData) {
            window.location.href = paymentData.data; // Redirect to the payment URL
        } else {
            toast.error('Payment failed. Please try again.', { id: 'payment' });
        }
    }, [isSuccess])
    const handleOpenModal = (event, details) => {
        event.stopPropagation();
        event.preventDefault(); // Prevent default action if any
        // event.stopPropagation(); // Sto          
        document.getElementById('booking_details_modal').showModal();
        setDetails(details)
    };
    if (isLoading) return <Loading />

    const handleCancel = (id) => {
        const isConfirm = window.confirm("Booking will canceled.");
        if (isConfirm) {
            const updateBookingData = {
                status: 'cancel'
            }
            updateBooking({ updateBookingData, id });
            toast.success(`Change status to ${e.target.value}`,)
        }
    }

    const handlePay = (item) => {
        const paydata = {
            user: userId,
            car: item.car._id,
            booking: item._id,

        }
        createPayment(paydata)
    }
    console.log('paymentData', paymentData, paymentError)
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Car Name</th>
                            <th>User Email</th>
                            <th>Booking Date</th>
                            <th>Staus</th>

                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.length > 0 ? data?.map((item, index) => {
                                const { user, _id, car, date, status, isReturned,paymentStatus
                                } = item
                                return <tr key={_id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <th>
                                        {car?.name}
                                    </th>
                                    <th>
                                        {user?.email}
                                    </th>
                                    <th>
                                        {date}
                                    </th>
                                    <td className="py-2 px-4 border-b">
                                        <span className={`px-2 py-1 rounded text-sm font-semibold ${status === 'approve'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {status}
                                        </span>
                                    </td>
                                    <th>
                                        <button onClick={(e) => handleOpenModal(e, item)} className="btn btn-sm">Details</button>
                                        {
                                            status === 'pending' && <button onClick={(e) => handleCancel(_id)} className="ms-2 btn btn-sm bg-error">Cancel</button>
                                        }
                                        {
                                            isReturned ? paymentStatus==='Paid'?<button className="ml-3 btn btn-sm btn-error text-white">{paymentStatus}</button>:<button onClick={() => handlePay(item)} className="ml-3 btn btn-sm btn-success text-white">Pay</button> :''
                                        }


                                    </th>

                                </tr>
                            }) : <p className="py-3">No bookings found...</p>
                        }



                    </tbody>
                </table>
            </div>
            <BookingDetailsModal data={details} />
        </>
    )
}

const BookingDetailsModal = ({ data }) => {
    const {
        car,
        date,
        startTime,
        endTime,
        totalCost,
        personalDetails,
        paymentDetails,
        user,
    } = data;
    return <>

        {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
        <dialog id="booking_details_modal" className="modal" style={{ width: "100%" }}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="container mx-auto p-4">
                    <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Field</th>
                                <th className="py-2 px-4 border-b">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Car Information */}
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Car Name</td>
                                <td className="py-2 px-4 border-b">{car?.name}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Price Per Hour</td>
                                <td className="py-2 px-4 border-b">${car?.pricePerHour}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Color</td>
                                <td className="py-2 px-4 border-b">{car?.color}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Features</td>
                                <td className="py-2 px-4 border-b">{car?.features.join(', ')}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Insurance Policy</td>
                                <td className="py-2 px-4 border-b" dangerouslySetInnerHTML={{ __html: car?.insurancePolicy }} />
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Cancellation Policy</td>
                                <td className="py-2 px-4 border-b" dangerouslySetInnerHTML={{ __html: car?.cancellationPolicy }} />
                            </tr>

                            {/* Booking Information */}
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Start Time</td>
                                <td className="py-2 px-4 border-b">{startTime}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">End Time</td>
                                <td className="py-2 px-4 border-b">{endTime || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Date</td>
                                <td className="py-2 px-4 border-b">{date}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Total Cost</td>
                                <td className="py-2 px-4 border-b">${totalCost}</td>
                            </tr>

                            {/* Personal Details */}
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">NID/Passport</td>
                                <td className="py-2 px-4 border-b">{personalDetails?.nidOrPassport}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Driving License</td>
                                <td className="py-2 px-4 border-b">{personalDetails?.drivingLicense}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Additional Options</td>
                                <td className="py-2 px-4 border-b">{personalDetails?.additionalOptions.join(', ')}</td>
                            </tr>

                            {/* Payment Details */}
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Card Holder Name</td>
                                <td className="py-2 px-4 border-b">{paymentDetails?.cardHolderName}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Card Number</td>
                                <td className="py-2 px-4 border-b">{paymentDetails?.cardNo}</td>
                            </tr>

                            {/* User Information */}
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">User Name</td>
                                <td className="py-2 px-4 border-b">{user?.name}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">User Email</td>
                                <td className="py-2 px-4 border-b">{user?.email}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">User Phone</td>
                                <td className="py-2 px-4 border-b">{user?.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </dialog>
    </>
}
