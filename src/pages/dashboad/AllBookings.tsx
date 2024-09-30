import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import { useDeleteCarMutation, useGetCarsQuery, useReturnCarMutation } from "../../redux/api/carApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useGetAllBookingsQuery, useUpdateBookingMutation } from "../../redux/api/bookingApi";
export default function AllBookins() {

    const [details, setDetails] = useState({})
    const { data, isLoading, error: getError } = useGetAllBookingsQuery(undefined);
    const [updateBooking, { data: updatedData }] = useUpdateBookingMutation();
    const [bookingId, setBookingId] = useState('')



    const handleOpenModal = (event, details) => {
        event.stopPropagation();
        event.preventDefault(); // Prevent default action if any
        // event.stopPropagation(); // Sto          
        document.getElementById('booking_details_modal').showModal();
        setDetails(details)
    };
    if (isLoading) return <Loading />

    const handleChangeStatus = (e, id) => {
        e.preventDefault();
        const updateBookingData = {
            status: e.target.value
        }
        updateBooking({ updateBookingData, id });
        toast.success(`Change status to ${e.target.value}`,)
    }

    const handleOpenReturnCarModal = (event, id) => {
        event.stopPropagation();
        event.preventDefault(); // Prevent default action if any
        // event.stopPropagation(); // Sto          
        document.getElementById('return_car_modal').showModal();
        setBookingId(id)
    }
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
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.length > 0 ? data?.map((item, index) => {
                                const { user, _id, car, date, status
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

                                    <th className="flex gap-2">
                                        <fieldset>
                                            <div className="flex border border-gray-300 text-gray-800 bg-white shadow-sm">
                                                <label htmlFor="frm-whatever" className="sr-only">Status</label>
                                                <select onChange={(e) => handleChangeStatus(e, _id)} defaultValue={status} className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                                                    <option value="approve">approve</option>
                                                    <option value="cancel">cancel</option>
                                                    <option value="pending">pending</option>
                                                </select>
                                                <div className="pointer-events-none flex items-center px-2 text-gray-700 border-l">
                                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </th>
                                    <th>
                                        <button onClick={(e) => handleOpenModal(e, item)} className="btn btn-sm">Details</button>
                                        <button onClick={(e) => handleOpenReturnCarModal(e, _id)} className="ml-3 btn btn-sm bg-accent">Return</button>
                                    </th>
                                </tr>
                            }) : <p className="py-3">No bookings found...</p>
                        }
                    </tbody>
                </table>
            </div>
            <BookingDetailsModal data={details} />
            <ReturnCarModal bookingId={bookingId} />
        </>
    )
}
const ReturnCarModal = ({ bookingId }) => {
    const [startHour, setStartHour] = useState<string>('1');
    const [timeZone, setTimeZone] = useState<string>('PM');
    const endTime = `${timeZone === "AM" ? startHour : parseInt(startHour) + 12}:00`;
    const [returnCar, { isLoading, isSuccess, data, error, isError }] = useReturnCarMutation()
    const seconds = [];
    const navigate = useNavigate()
    for (let index = 1; index <= 11; index++) {
        seconds.push(index)
    }

    useEffect(() => {
        if (error) {
            console.log(error);
            error.data.errorSources.map((e) => toast.error(e.message));
        }
        if (isSuccess) {
            navigate("/admin/dashboard/manage/bookings/all");
        }
    }, [isError, isSuccess]);
    console.log('endTime', endTime)
    const handelReturn = () => {
        toast.success('Car returned successfull')
        document.getElementById('return_car_modal').style.display = 'none'; // Hides the modal
        returnCar({ bookingId, endTime })
    }
    console.log('reutrn ', isLoading, isSuccess, data)
    return <>

        <dialog id="return_car_modal" className="modal" style={{ width: "100%" }}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="text-xl font-bold">End Time</h3>
                <div className="mt-3 bg-gray-100 p-10">
                    <div className="inline-flex text-lg border rounded-md shadow-lg p-2">
                        <select value={startHour} onChange={(e) => setStartHour(e.target.value)} name="startHour" id="" className="px-2 outline-none appearance-none bg-transparent">
                            {
                                seconds.map(s => <option value={`${s}`}>{s}</option>)
                            }
                            {/* <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="02">03</option> */}
                        </select>
                        <span className="px-2">:</span>
                        <select name="" id="" className="px-2 outline-none appearance-none bg-transparent">
                            <option value="00">00</option>
                        </select>
                        <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)} name="timeZone" id="" className="px-2 outline-none appearance-none bg-transparent">
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
                <div className="text-right py-3">
                    <button className="btn btn-success btn-sm text-white" onClick={handelReturn}>Return</button>
                </div>
            </div>
        </dialog>

    </>
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
