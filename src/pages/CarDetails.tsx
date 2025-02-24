import { Link, useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { useGetSingleCarQuery } from "../redux/api/carApi";
import Loading from "../components/ui/Loading";
import { useEffect, useState } from "react";
import ReactImageMagnify from 'react-image-magnify';


export default function CarDetails() {
    const { id } = useParams()
    const { data, isLoading, isError } = useGetSingleCarQuery(id);
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(() => {
        if (isError) {
            navigate('/')
        }
    }, [isError])
    if (isLoading) return <Loading />
    const { name, images, description, features, pricePerHour, status, cancellationPolicy, insurancePolicy } = data.data
    console.log(images)
    return (
        <MainLayout >
            <div className="max-w-7xl mx-auto p-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="md:flex">


                        <div className="md:w-1/2">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: images[index]
                                },
                                largeImage: {
                                    src: images[index],
                                    width: 700,
                                    height: 1200
                                }
                            }} />
                            {/* <img className="w-full h-96 object-cover" src={images[index]} alt="Tesla Model 3 Front" /> */}
                        </div>


                        <div className="p-6 md:w-1/2 flex flex-col justify-between">

                            <div>
                                <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
                                <div className="text-lg text-gray-600 mt-2"> <p dangerouslySetInnerHTML={{ __html: description }} /></div>
                                <div className="text-lg text-gray-600 mt-2"> <p dangerouslySetInnerHTML={{ __html: cancellationPolicy }} /></div>
                                <div className="text-lg text-gray-600 mt-2"> <p dangerouslySetInnerHTML={{ __html: insurancePolicy }} /></div>
                                <p className="text-xl text-green-500 font-semibold mt-4">${pricePerHour}/hour</p>
                            </div>


                            <div className="mt-6">
                                <button className={`btn btn-xs text-white ${status !== 'available' ? 'bg-red-800' : 'bg-green-700'}`}>{status}</button>
                            </div>


                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">Features</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-600">
                                    {
                                        features.map(f => <li key={f}>{f}</li>)
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="p-6 border-t">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">More Images</h3>
                        <div className="flex flex-wrap gap-3">
                            {
                                images?.map((image, i) => <div onClick={() => setIndex(i)} key={image} className="w-24 cursor-pointer transition duration-500 hover:border-4 hover:border-blue-500 hover:shadow-lg">
                                    <img className="w-full h-full object-cover" src={image} alt="Tesla Model 3 Rear" />
                                </div>
                                )
                            }

                        </div>

                    </div>
                    {
                        userInfo?.role === 'user' && <div className="p-10 text-center">
                            <Link to={`/book/${id}`} className="btn bg-stone-700 text-white  btn-wide hover:bg-stone-900">Book Now</Link>
                        </div>
                    }
                </div>
            </div>

        </MainLayout>
    )
}
