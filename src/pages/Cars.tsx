import '../assets/css/Cars.css'
import { FaHeart, FaStar, FaRegStar, FaCar, FaBook, FaEye } from 'react-icons/fa'
import { useGetCarsQuery } from '../redux/api/carApi'
import Loading from '../components/ui/Loading'
import { Link } from 'react-router-dom'
export default function Cars() {
    const { data: cars, isLoading } = useGetCarsQuery(undefined)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (isLoading) return <Loading />
    return (
        <section>
            <div> <h1 className="text-4xl text-indigo-900 font-semibold">Stays in Dhaka, BD.</h1></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 px-20 gap-9">
                {
                    cars?.length > 0 ? cars.map(({ name, color, description, pricePerHour, features, _id , images}) =>
                        <div className="flex my-3 flex-col md:flex-row gap-6 bg-white border border-gray-100 p-4 md:p-6 rounded-xl shadow-md hover:bg-gray-100 transform transition duration-500 hover:scale-100 hover:shadow-lg">
                            <img
                                className="w-full h-48 rounded-xl lg:w-64 lg:h-64 sm:object-cover lg:object-fill"
                                src={images[0]}
                                alt="Card image"
                            />
                            <div className="flex flex-col flex-grow justify-between p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg md:text-xl">{name}</h3>
                                    <div className="text-xl text-red-400 cursor-pointer">
                                        <FaHeart />
                                    </div>
                                </div>
                                <div className="flex flex-col text-gray-500 mb-4 text-sm md:text-md">
                                    <div className='flex items-center gap-3'>
                                        <strong>Color: </strong>
                                        <span className={`${color === 'White' ? "bg-gray-400" : ""} border p-1`}>
                                            <FaCar color={color} size={20} />
                                        </span>
                                    </div>
                                    {/* <p>{description}</p> */}
                                </div>
                                <div className="flex flex-col text-gray-500 mb-4 text-sm md:text-md">
                                    <strong>Features:</strong>
                                    <ul>
                                        {features.map((f, index) => <li key={index}>{f}</li>)}
                                    </ul>
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
                                        <span className="text-lg md:text-xl font-semibold text-blue-800">${pricePerHour}</span>/hour
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <div className=' gap-2'>
                                    {
                                        userInfo.role==='user'&&<Link to={`/book/${_id}`} className="mt-4 bg-black text-white font-bold py-1 px-4 rounded hover:bg-gray-700 transition duration-300 flex items-center justify-center">
                                        <FaBook className="mr-2" />
                                        Book Now
                                    </Link>
                                    }
                                    <Link to={`/cars/${_id}`} className="mt-4 bg-black text-white font-bold py-1 px-4 rounded hover:bg-gray-700 transition duration-300 flex items-center justify-center">
                                        <FaEye className="mr-2" />
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ) : "No cars found"
                }

            </div>
        </section>
    )
}
