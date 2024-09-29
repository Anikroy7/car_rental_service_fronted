
import { useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout'
import { useForm } from 'react-hook-form';
import { useGetSlots } from '../hooks/useGetSlots';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import { useGetAllUsersQuery, useGetAUserQuery } from '../redux/api/userApi';
import { CgLayoutGrid } from 'react-icons/cg';
import Loading from '../components/ui/Loading';
import toast from 'react-hot-toast';
import BookingCalender from './BookingCalender';
import BookingCalendar from './BookingCalender';
import { useGetSingleCarQuery } from '../redux/api/carApi';
import { getHours } from 'date-fns';
import InsuranceOptions from './InsuranceOptions';
import { useCreateBookingMutation } from '../redux/api/bookingApi';


type FormInputs = {
    name: string;
    email: string;
    phone: string;
    address: string;
};

export default function Book() {
    const { slot, setSlot, timesSlots } = useGetSlots();
    const { id } = useParams();
    const { email, userId } = useAppSelector(state => state.auth);
    const { data: user, isLoading, isError, error } = useGetAUserQuery(undefined);
    const { data: car, isLoading: carLoading, error: carError } = useGetSingleCarQuery(id);
    const [startHour, setStartHour] = useState<string>('12');
    const [timeZone, setTimeZone] = useState<string>('AM');
    const [createBooking, { isLoading: createBookingLoading, isError: createBookingError, error: createBookingErrorRes, data: createBookingData }] = useCreateBookingMutation();
    // const navigate = useNavigate();
    const [value, onChange] = useState<Value>(new Date());
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
    let { name, phone, address } = user.data;
    const { name: carName, images, color, pricePerHour, isElectric, features } = car.data;
    const seconds = [];
    for (let index = 1; index <= 11; index++) {
        seconds.push(index)

    }
    const fullDate = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;

    const onSubmit = (data: FormInputs) => {
        const startTime = `${timeZone === "AM" ? startHour : parseInt(startHour) + 12}:00`;
        console.log(fullDate, startTime)
        createBooking({
            startTime,
            date:fullDate,
            carId: id,
        });
    }

    console.log('createBookingErrorRes', createBookingData)
    return (
        <MainLayout>

            <div className="w-full h-full px-10" id="chec-div">

                <div className="flex flex-col lg:flex-row" id="cart">
                    <div className="lg:w-[70%] w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white" id="scroll">
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

                                    <div className="mt-3 bg-gray-100 p-20">
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
                                    {/* <div className="flex flex-wrap gap-2 pt-3 w-full justify-start">

                                        {
                                            timesSlots.map(s => (
                                                <kbd onClick={() => setSlot(s)} key={s} className={`kbd kbd-md w-24 border-none text-cyan-100 bg-green-500 text-center ${slot === s && 'bg-stone-800'} hover:cursor-pointer `}>{s}</kbd>
                                            ))
                                        }
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <InsuranceOptions />
                        <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 shadow-md p-3">
                            <div className="md:w-4/12 lg:w-1/2 w-full">
                                <img src={images[0]} alt="Black Leather Bag" className="h-full object-center object-cover hidden md:block" />
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
                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Repeat for other items as needed */}
                    </div>

                    <div className="lg:w-[32%] w-full bg-gray-100 z-0 ">
                        <div className="flex flex-col lg:px-8 md:px-7 px-4 justify-between">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <p className="lg:text-4xl text-3xl font-black leading-9 text-black">
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-black">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-black">$1,240</p>
                                        </div>
                                    </p>
                                    <label htmlFor="slot" className='text-black font-bold'>Selected Date</label>
                                    <select className="select select-bordered select-sm w-full my-5">
                                        {/* <option disabled selected> Selected slot</option> */}
                                        <option disabled selected>{fullDate}</option>
                                        {/*  {
                                            slots.map(s => <option key={s} disabled >{s}</option>)
                                        } */}
                                    </select>
                                    {slot && <div className="flex justify-between px-2">
                                        <p className='font-bold'>Total Time:</p>
                                        <p>1 hours</p>
                                    </div>}

                                    <div className="group relative px-2 mt-6">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Username</label>
                                        <input id="1" defaultValue={name} type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black"  {...register("name", {
                                            required: "Username is required!",
                                        })} />
                                        <div className="text-red-500">
                                            {errors.name && <p>{errors.name.message}</p>}
                                        </div>
                                    </div>
                                    <div className="group relative px-2 mt-3">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Email</label>
                                        <input id="1" disabled defaultValue={email} type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black cursor-not-allowed" />
                                    </div>
                                    <div className="group relative px-2 mt-3">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Phone Number</label>
                                        <input id="1" defaultValue={phone} type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black" {...register("phone", {
                                            required: "phone is required!",
                                            pattern: {
                                                value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                                message: "Invalid phone number!",
                                            },
                                        })} />
                                        <div className="text-red-500">
                                            {errors.phone && <p>{errors.phone.message}</p>}
                                        </div>

                                    </div>
                                    <div className="group relative px-2 mt-3">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Address</label>
                                        <input id="1" defaultValue={address} type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black" {...register("address", {
                                            required: "Address is required!",
                                        })} />
                                        <div className="text-red-500 mb-2">
                                            {errors.address && <p>{errors.address.message}</p>}
                                        </div>
                                    </div>
                                    <input type='submit' className="btn btn-wide w-full bg-black text-white hover:bg-gray-800" value={'Reserve'} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
