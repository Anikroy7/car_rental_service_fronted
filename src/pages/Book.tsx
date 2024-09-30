
import { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import Loading from '../components/ui/Loading';
import BookingCalendar from './BookingCalender';
import { useGetSingleCarQuery } from '../redux/api/carApi';
import InsuranceOptions from './InsuranceOptions';
import { setBooking } from '../redux/features/booking/bookingSlice';
import { useGetAUserQuery } from '../redux/api/userApi';


type FormInputs = {
    name: string;
    email: string;
    phone: string;
    address: string;
    cardHolderName: string
};

export default function Book() {
    const { id } = useParams();
    const { email, userId } = useAppSelector(state => state.auth);
    const { data: user, isLoading, isError, error } = useGetAUserQuery(undefined);
    const { data: car, isLoading: carLoading, error: carError } = useGetSingleCarQuery(id);
    const [startHour, setStartHour] = useState<string>('1');
    const [timeZone, setTimeZone] = useState<string>('PM');
    // const [createBooking, { isLoading:   , isError: createBookingError, error: createBookingErrorRes, data: createBookingData }] = useCreateBookingMutation();
    // const navigate = useNavigate();
    const [value, onChange] = useState<Value>(new Date());
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    // useEffect(() => {
    //     console.log(error)
    //     if (!user) {
    //         navigate('/')
    //     }
    //     console.log(error)
    // }, [isError, error])

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormInputs>();
    if (isLoading || carLoading) return <Loading />
    // console.log(user[0])
    let { name, phone, address } = user?.data;
    const { name: carName, images, color, pricePerHour, isElectric, features, cancellationPolicy, insurancePolicy, _id } = car.data;
    const seconds = [];
    for (let index = 1; index <= 11; index++) {
        seconds.push(index)

    }
    const fullDate = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;

    const onSubmit = (data: FormInputs) => {
        console.log(data)
        const startTime = `${timeZone === "AM" ? startHour : parseInt(startHour) + 12}:00`;
        const bookingObj = {
            paymentDetails: {
                cardHolderName: data.cardHolderName,
                cardNo: data.cardNo
            },
            personalDetails: {
                nidOrPassport: data.nidPassport,
                drivingLicense: data.drivingLicense,
                additionalOptions: [data.gps === 'yes' ? 'GPS' : '', data.childSeat === 'yes' ? "Child Seat" : '',]
            },
            date: fullDate,
            startTime,
            endTime: '',
            totalCost: ''

        }
        dispatch(setBooking({...bookingObj}))
 
        navigate(`/book/confirm/${_id}`)
    }

    return (
        <MainLayout>
            <section className="w-full inline-block h-auto p-10 bg-gray-200">
                <div id="advanced_filters" className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-white shadow-md block">
                        <div className="w-full p-2 flex hover:bg-blue-500 hover:text-white cursor-pointer relative">
                            <p className="font-bold leading-5 w-11/12 text-md">Filtra per:</p>
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" />
                            </svg>
                        </div>
                        <div className="p-2 w-full relative inline-block">
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-2 m-0.5 text-sm font-bold border-2 text-blue-800 border-blue-500 bg-white rounded-lg">
                                <span className="w-full inline-flex leading-4 align-middle">
                                    <svg className="fill-current w-4 mr-2 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                    </svg>
                                    Statistiche
                                </span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md block">
                        <div className="w-full p-2 flex hover:bg-blue-500 hover:text-white cursor-pointer relative">
                            <p className="font-bold leading-5 w-11/12 text-md">Filtra per:</p>
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" />
                            </svg>
                        </div>
                        <div className="p-2 w-full relative inline-block">
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-2 m-0.5 text-sm font-bold border-2 text-blue-800 border-blue-500 bg-white rounded-lg">
                                <span className="w-full inline-flex leading-4 align-middle">
                                    <svg className="fill-current w-4 mr-2 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                    </svg>
                                    Statistiche
                                </span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md block">
                        <div className="w-full p-2 flex hover:bg-blue-500 hover:text-white cursor-pointer relative">
                            <p className="font-bold leading-5 w-11/12 text-md">Filtra per:</p>
                            <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" />
                            </svg>
                        </div>
                        <div className="p-2 w-full relative inline-block">
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-2 m-0.5 text-sm font-bold border-2 text-blue-800 border-blue-500 bg-white rounded-lg">
                                <span className="w-full inline-flex leading-4 align-middle">
                                    <svg className="fill-current w-4 mr-2 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                    </svg>
                                    Statistiche
                                </span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                            <button className="p-1 px-4 m-0.5 hover:text-blue-800 hover:border-blue-500 text-sm font-bold border-2 text-gray-600 border-gray-300 bg-white rounded-lg">
                                <span className="w-full flex align-middle">Circolare</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full h-full px-10" id="chec-div">

                <div className="flex flex-col lg:flex-row" id="cart">
                    <div className="lg:w-[60%] w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white" id="scroll">
                        <div className="flex items-center cursor-pointer" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <Link className="text-sm pl-2 leading-none text-black " to={'/'}>Back</Link>
                        </div>

                        <div className="card lg:card-side bg-base-100 shadow-md p-10 my-10">
                            <div>
                                <BookingCalendar onChange={onChange} value={value} />
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className='flex gap-5'>
                                        <h3 className='mr-5 font-xl font-bold'>Select Start Time </h3>

                                    </div>

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
                                    
                                </div>
                            </div>
                        </div>
                        <InsuranceOptions cancellationPolicy={cancellationPolicy} insurancePolicy={insurancePolicy} />
                        <h3 className='text-xl font-bold'>Product details</h3>
                        <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 shadow-md p-3">
                            <div className="md:w-4/12 lg:w-1/2 w-full">
                                <img src={images[0]} width={100} height={50} alt="Black Leather Bag" className="h-full object-center object-cover hidden md:block" />
                                <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.png" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 lg:w-3/4 flex flex-col justify-center">

                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-black">{carName}</p>

                                </div>
                                <div>
                                    <p className="text-xs leading-3 text-black pt-2">Is Electric: {isElectric ? 'Yes' : 'No'}</p>
                                    <p className="text-xs leading-3 text-black py-4">Color: {color}</p>
                                    <p className="w-full text-xs leading-3 text-black">{features[0]}</p>
                                    <p className="my-2">Price: ${pricePerHour}/h</p>
                                    <div className="flex items-center justify-between pt-5">
                                        <div className="flex items-center">
                                            <p className="text-xs leading-3 underline text-black cursor-pointer">Add to favorites</p>
                                            {/* <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="lg:w-[40%] w-full bg-gray-100 z-0 ">
                        <div className="flex flex-col lg:px-8 md:px-7 px-4 justify-between">
                            <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                                <h2 className="text-3xl font-bold mb-6 text-center">Car Booking Form</h2>

                                {/* Price and Selected Date Section */}
                                <div className="flex items-center justify-between lg:pt-5 pt-20 pb-6">
                                    <p className="text-2xl font-bold">Price:</p>
                                    <p className="text-2xl font-bold text-right">${pricePerHour}/h</p>
                                </div>
                                <div>
                                    <label htmlFor="slot" className="block text-black font-bold">Selected Date</label>
                                    <select
                                        className="select select-bordered select-sm w-full my-5"
                                        disabled
                                    >
                                        <option>{fullDate}</option>
                                    </select>
                                    {slot && (
                                        <div className="flex justify-between px-2">
                                            <p className="font-bold">Total Time:</p>
                                            <p>1 hour</p>
                                        </div>
                                    )}
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Personal Details */}


                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* NID/Passport */}
                                        <div>
                                            <label className="block font-medium mb-2">NID/Passport</label>
                                            <input
                                                type="text"
                                                {...register("nidPassport", { required: "NID/Passport is required!" })}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            />
                                            {errors.nidPassport && <span className="text-red-500">{errors.nidPassport.message}</span>}
                                        </div>

                                        {/* Driving License */}
                                        <div>
                                            <label className="block font-medium mb-2">Driving License</label>
                                            <input
                                                type="text"
                                                {...register("drivingLicense", { required: "Driving license is required!" })}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            />
                                            {errors.drivingLicense && <span className="text-red-500">{errors.drivingLicense.message}</span>}
                                        </div>
                                    </div>

                                    {/* Payment Information */}
                                    <div>
                                        <label className="block font-medium mb-2">Card Holder Name</label>
                                        <input
                                            type="text"
                                            {...register("cardHolderName", { required: "Car holder name is required!" })}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            placeholder="Card Number"
                                        />
                                        {errors.cardHolderName && <span className="text-red-500">{errors.cardHolderName.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2">Payment Information (Credit Card)</label>
                                        <input
                                            type="text"
                                            {...register("cardNo", { required: "Card Number is required!" })}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            placeholder="Card Number"
                                        />
                                        {errors.cardNo && <span className="text-red-500">{errors.cardNo.message}</span>}
                                    </div>
                                    {/* <div>
                                        <label className="block font-medium mb-2">Payment Information (Credit Card)</label>
                                        <input
                                            type="text"
                                            {...register("paymentInfo", { required: "Payment information is required!" })}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            placeholder="Card Number"
                                        />
                                        {errors.paymentInfo && <span className="text-red-500">{errors.paymentInfo.message}</span>}
                                    </div> */}

                                    {/* Additional Options */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-2">GPS</label>
                                            <select
                                                {...register("gps")}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">Child Seat</label>
                                            <select
                                                {...register("childSeat")}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Phone and Address */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-2">Phone Number</label>
                                            <input
                                                type="text"
                                                defaultValue={phone}
                                                {...register("phone", {
                                                    required: "Phone number is required!",
                                                    pattern: {
                                                        value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                                        message: "Invalid phone number!",
                                                    },
                                                })}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            />
                                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">Address</label>
                                            <input
                                                type="text"
                                                defaultValue={address}
                                                {...register("address", { required: "Address is required!" })}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                                            />
                                            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            className="btn btn-wide w-full bg-black text-white hover:bg-gray-800"
                                            value="Reserve"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
