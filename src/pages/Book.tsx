
import { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout'
import { useForm } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    phone: string;
    address: string;
};

export default function Book() {
    const start = 8;
    const end = 22;
    const timesSlots = [];
    const [slots, setSlots] = useState([])

    for (let i = start; i <= end; i++) {
        const time = i >= 12 ? i - 12 : i
        const amOrPm = i < 12 ? "AM" : "PM";
        timesSlots.push(`${time === 0 ? 12 : time}${amOrPm}-${time + 1}${time + 1 === 12 ? "PM" : amOrPm}`)
    }
    const handleAddSlots = (s) => {
        if (!slots.includes(s)) {
            setSlots([...slots, s])
        } else {
            setSlots([...slots.filter((se) => se !== s)])
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data)
    }

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
                            <p className="text-sm pl-2 leading-none text-black">Back</p>
                        </div>
                        <p className="lg:text-4xl text-3xl font-black leading-10 text-black pt-3">Bag</p>

                        <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 shadow-md p-3">
                            <div className="md:w-4/12 lg:w-1/2 w-full">
                                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover hidden md:block" />
                                <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.png" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 lg:w-3/4 flex flex-col justify-center">
                                <p className="text-xs leading-3 text-black md:pt-0 pt-4">RF293</p>
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-black">North wolf bag</p>

                                </div>
                                <div>
                                    <p className="text-xs leading-3 text-black pt-2">Height: 10 inches</p>
                                    <p className="text-xs leading-3 text-black py-4">Color: Black</p>
                                    <p className="w-full text-xs leading-3 text-black">Composition: 100% calf leather</p>
                                    <p className="my-2">Price: $1,000</p>
                                    <div className="flex items-center justify-between pt-5">
                                        <div className="flex items-center">
                                            <p className="text-xs leading-3 underline text-black cursor-pointer">Add to favorites</p>
                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-5'>
                                    {/* <h3 className='mr-5'>Available Slots:</h3> */}
                                    <kbd className="kbd kbd-sm bg-red-500 text-white">Unavailable</kbd>
                                    <kbd className="kbd kbd-sm bg-green-500 text-white">Avaiable</kbd>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-3 w-full justify-start">

                                    {
                                        timesSlots.map(s => (
                                            <kbd onClick={() => handleAddSlots(s)} key={s} className={`kbd kbd-md w-24 border-none text-cyan-100 bg-green-500 text-center ${slots.includes(s) && 'bg-stone-800'} hover:cursor-pointer `}>{s}</kbd>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Repeat for other items as needed */}
                    </div>

                    <div className="lg:w-[30%] w-full bg-gray-100 z-0">
                        <div className="flex flex-col lg:px-8 md:px-7 px-4 justify-between">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <p className="lg:text-4xl text-3xl font-black leading-9 text-black">
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-black">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-black">$1,240</p>
                                        </div>
                                    </p>
                                    <select className="select select-bordered select-sm w-full my-5">
                                        <option disabled selected>Total selected slots</option>
                                        {
                                            slots.map(s => <option key={s} disabled >{s}</option>)
                                        }
                                    </select>
                                    <div className="flex justify-between px-2">
                                        <p className='font-bold'>Total Time:</p>
                                        <p>{slots.length} hours</p>
                                    </div>

                                    <div className="group relative px-2 mt-6">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Username</label>
                                        <input id="1" type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black"  {...register("name", {
                                            required: "Username is required!",
                                        })} />
                                        <div className="text-red-500">
                                            {errors.name && <p>{errors.name.message}</p>}
                                        </div>
                                    </div>
                                    <div className="group relative px-2 mt-3">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Email</label>
                                        <input id="1" type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black" />
                                    </div>
                                    <div className="group relative px-2 mt-3">
                                        <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-black">Phone Number</label>
                                        <input id="1" type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black" {...register("phone", {
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
                                        <input id="1" type="text" className="peer h-10 w-full rounded-md  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-black" {...register("address", {
                                            required: "address is required!",
                                        })} />
                                        <div className="text-red-500">
                                            {errors.address && <p>{errors.address.message}</p>}
                                        </div>
                                    </div>


                                    <input type='submit' className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white hover:bg-gray-700" value={'Checkout'} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}
