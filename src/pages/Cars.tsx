import '../assets/css/Cars.css'
import { FaHeart, FaStar, FaRegStar, FaMapMarkerAlt } from 'react-icons/fa'
export default function Cars() {
    return (
        <section>
            <div> <h1 className="text-4xl text-indigo-900 font-semibold">Stays in Dhaka, BD.</h1></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-20 gap-9">
                <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-4 md:p-6 rounded-xl shadow-md">
                    <img
                        className="w-full h-48 rounded-xl lg:w-64 lg:h-72 sm:object-cover lg:object-fill   "
                        src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/cd74e70d-68ee-44dc-85a8-3edcf3ffe348/acd2cd85-209c-45f2-9033-8c1033ea8745.png"
                        alt="Card image"
                    />
                    <div className="flex flex-col flex-grow justify-between p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg md:text-xl">Sofitel Cairo Nile El Gezirah</h3>
                            <div className="text-xl text-red-400 cursor-pointer">
                                <FaHeart />
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-500 mb-4 md:mb-24 text-sm md:text-md">
                            <span><FaMapMarkerAlt className="inline mr-1" /> Lake Hilma</span>
                            <span>0.7 mi from Cairo</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-gray-500 text-sm">16,863 reviews</span>
                                <div className="stars text-yellow-300 text-xl flex">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">
                                <span className="text-lg md:text-xl font-semibold text-blue-800">$82</span>/night
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 bg-white border border-gray-100 p-6 rounded-xl shadow-md">
                    <img className="w-64 h-72 rounded-xl" src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/07827872-c533-4f5f-8931-3a911250aaf0/96548bd5-fb31-4570-b31a-517e2ebe5408.png" alt="Card image" />
                    <div className="flex flex-col flex-grow justify-between p-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-xl">Fairmont Nile City</h3>
                            <div className="text-xl"><i className="far fa-fw fa-heart"></i></div>
                        </div>
                        <div className="flex flex-col text-gray-500 mb-24 text-md">
                            <span>Lake Hilma</span>
                            <span>0,9 mi from Cairo</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-gray-500 text-sm">587 reviews</span>
                                <div className="stars text-xl text-yellow-300">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">
                                <span className="text-xl font-semibold text-blue-800">$82</span>/night
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 bg-white border border-gray-100 p-6 rounded-xl shadow-md">
                    <img className="w-64 h-72 rounded-xl" src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/607e07e8-c829-4ec3-ba7a-20771f79bd64/e86ac423-47a9-4dd6-a83f-888431ed12aa.png" alt="Card image" />
                    <div className="flex flex-col flex-grow justify-between p-4">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-xl">Ramses Hilton Hotel</h3>
                            <div className="text-xl"><i className="far fa-fw fa-heart"></i></div>
                        </div>
                        <div className="flex flex-col text-gray-500 mb-24 text-md">
                            <span>Lake Hilma</span>
                            <span>0,7 mi from Cairo</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-gray-500 text-sm">16,863 reviews</span>
                                <div className="stars text-xl text-yellow-300">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">
                                <span className="text-xl font-semibold text-blue-800">$82</span>/night
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
