
import { useState } from 'react';
import MainLayout from '../components/layouts/MainLayout'

export default function Cart() {
    const times = [];
    const startHour = 8; // Start at 8 AM
    const endHour = 22; // End at 10 PM (to allow for a 1-hour slot ending at 11 PM)
  
    for (let hour = startHour; hour < endHour; hour++) {
      const startHourFormatted = hour > 12 ? hour - 12 : hour;
      const startAmPm = hour >= 12 ? 'PM' : 'AM';
      
      const endHourFormatted = (hour + 1) > 12 ? (hour + 1) - 12 : (hour + 1);
      const endAmPm = (hour + 1) >= 12 ? 'PM' : 'AM';
  
      times.push(`${startHourFormatted} ${startAmPm} - ${endHourFormatted} ${endAmPm}`);
    }
  
    const [selectedSlots, setSelectedSlots] = useState([]);
  
    const handleSlotToggle = (slot) => {
      setSelectedSlots((prevSlots) =>
        prevSlots.includes(slot)
          ? prevSlots.filter((s) => s !== slot)
          : [...prevSlots, slot]
      );
    };
    return (
        <MainLayout>
            <div className="w-full h-full" id="chec-div">
                <div className="flex" id="cart">
                    <div className="lg:w-[70%] md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white" id="scroll">
                        <div className="flex items-center cursor-pointer" onClick={() => checkoutHandler(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <p className="text-sm pl-2 leading-none text-black">Back</p>
                        </div>
                        <p className="lg:text-4xl text-3xl font-black leading-10 text-black pt-3">Bag</p>

                        <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 shadow-md p-3">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
                                <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.png" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p className="text-xs leading-3 text-black md:pt-0 pt-4">RF293</p>
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-black">North wolf bag</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {times.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => handleSlotToggle(time)}
                                                className={`p-2 border rounded-md transition duration-200 
                        ${selectedSlots.includes(time) ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}
                        hover:bg-blue-300 hover:text-white`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs leading-3 text-black pt-2">Height: 10 inches</p>
                                <p className="text-xs leading-3 text-black py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-black">Composition: 100% calf leather</p>
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex items-center">
                                        <p className="text-xs leading-3 underline text-black cursor-pointer">Add to favorites</p>
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-black">$1,000</p>
                                </div>
                            </div>
                        </div>

                        {/* Repeat for other items as needed */}

                    </div>

                    <div className="lg:w-[30%] md:w-8/12 w-full bg-white h-full">
                        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                            <div>
                                <p className="lg:text-4xl text-3xl font-black leading-9 text-black">Summary</p>
                                <div className="flex items-center justify-between pt-16">
                                    <p className="text-base leading-none text-black">Subtotal</p>
                                    <p className="text-base leading-none text-black">$1,000</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-black">Shipping</p>
                                    <p className="text-base leading-none text-black">$50</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base leading-none text-black">Tax</p>
                                    <p className="text-base leading-none text-black">$100</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-black">Total</p>
                                    <p className="text-2xl font-bold leading-normal text-right text-black">$1,240</p>
                                </div>
                                <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white hover:bg-gray-700">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </MainLayout>
    )
}
