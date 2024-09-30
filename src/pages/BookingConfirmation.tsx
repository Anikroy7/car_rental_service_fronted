import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { useAppSelector } from "../redux/hook";
import { useGetSingleCarQuery } from "../redux/api/carApi";
import Loading from "../components/ui/Loading";
import { useCreateBookingMutation } from "../redux/api/bookingApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function BookingConfirmation() {
    const { date, endTime, paymentDetails, personalDetails, startTime, totalCost } = useAppSelector(state => state.booking);
    const { userId } = useAppSelector(state => state.auth);
    const { carId } = useParams();
    console.log('casreddf', carId)
    const navigate = useNavigate()
    const { data, isLoading } = useGetSingleCarQuery(carId);
    const [createBooking, { isLoading: createBookingLoading, isError: createBookingError, error: createBookingErrorRes, data: createBookingData,isSuccess }] = useCreateBookingMutation();
    useEffect(() => {
        if (createBookingError) {
            createBookingErrorRes.data.errorSources.map((e) => toast.error(e.message));
        }
        if (isSuccess) {
            navigate("/user/dashboard/manage/bookings/my-bookings");
          }

    }, [createBookingErrorRes, createBookingError,isSuccess]);
    if (isLoading) return <Loading />
    console.log(data)
    const { name, features, insurancePolicy, cancellationPolicy } = data?.data;

    const handleConfirmBooking = () => {
        const bookingData = {
            user: userId,
            carId: carId,
            startTime: startTime,
            date: date,
            personalDetails: {
                nidOrPassport: personalDetails.nidOrPassport,
                drivingLicense: personalDetails.drivingLicense,
                additionalOptions: personalDetails.additionalOptions,
            },
            paymentDetails: {
                cardHolderName: paymentDetails.cardHolderName,
                cardNo: paymentDetails.cardNo,
            },
        };
        
        createBooking(bookingData);
    }
    // console.log('createBookingData', createBookingData)
    return (
        <MainLayout>
            <section className="bg-gray-100">

                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmation</h1>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Car Details</h2>
                        <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-gray-600"><strong>Name:</strong> {name}</p>
                            <p className="text-gray-600"><strong>Features:</strong> {features.map(f => <>
                                <span>{f},</span>
                            </>)}</p>
                            <div className="text-gray-600"><strong>Insurance Options:</strong>
                                <div dangerouslySetInnerHTML={{ __html: insurancePolicy }} />

                            </div>
                            <div className="text-gray-600"><strong>Cancellation Options:</strong>
                                <div dangerouslySetInnerHTML={{ __html: cancellationPolicy }} />

                            </div>

                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h2>
                        <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-gray-600"><strong>NID/Passport:</strong> {personalDetails?.nidOrPassport}</p>
                            <p className="text-gray-600"><strong>Driving License:</strong> {personalDetails?.drivingLicense}</p>
                            <p className="text-gray-600"><strong>Additional Options:</strong> {personalDetails?.additionalOptions.map(f => <span>{f},</span>)}</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h2>
                        <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-gray-600"><strong>Cardholder Name:</strong> {paymentDetails?.cardHolderName}</p>
                            <p className="text-gray-600"><strong>Card Number:</strong> {paymentDetails?.cardNo}</p>
                        </div>
                    </section>

                    <div className="flex justify-end mt-6">
                        <button onClick={handleConfirmBooking} className="px-6 py-3 text-white rounded-md btn focus:outline-none btn-wide bg-black hover:bg-gray-900" >
                            Confirm Booking
                        </button>
                    </div>
                </div>

            </section>
        </MainLayout>
    )
}
