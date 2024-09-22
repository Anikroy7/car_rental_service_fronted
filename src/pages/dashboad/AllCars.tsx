import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import { useDeleteCarMutation, useGetCarsQuery } from "../../redux/api/carApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function AllCars() {

    const [details, setDetails] = useState('')
    const { data, isLoading, error: getError } = useGetCarsQuery(undefined);
    const [deleteCar, { isError: deleteError }] = useDeleteCarMutation()


    useEffect(() => {
        console.log('getError', getError)
        if (getError || deleteError) {
            let error = getError || deleteError;
            console.log('error',error);
            error?.data?.errorSources.map((e) => toast.error(e.message));
        }
    }, [deleteError, getError])

    const handlelDelteCar = (id: string) => {
        const isConfirmed = window.confirm(`Are you sure? Car will be deleted.`);
        if (isConfirmed) {
            deleteCar(id)
        }
    }

    const handleOpenModal = (event, details) => {
        event.stopPropagation();
        event.preventDefault(); // Prevent default action if any
        // event.stopPropagation(); // Sto          
        document.getElementById('details_modal').showModal();
        setDetails(details)
    };
    console.log(data);
    if (isLoading) return <Loading />

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Images</th>
                            <th>Name</th>
                            <th>description</th>
                            <th>color</th>
                            <th>features</th>
                            <th>isElectric</th>
                            <th>Status</th>
                            <th>pricePerHour</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.length > 0 ? data?.map(({ name,
                                description,
                                _id,
                                color,
                                isElectric,
                                status,
                                features,
                                images,
                                pricePerHour,
                            }) => <tr key={_id}>
                                    <th>
                                        <img width={50} src={`${images[0]}`} alt="" />
                                    </th>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleOpenModal(e, description)} className="btn btn-sm">See</button>
                                    </td>
                                    <td>{color}</td>
                                    <td >
                                        {features[0]}
                                    </td>
                                    <td>{isElectric ? 'yes' : 'no'}</td>
                                    <td><td >
                                        {status === 'available' ? <div className="flex items-center gap-2"><input type="radio" name="radio-5" className="radio radio-success" defaultChecked /> <span>{status}</span></div> : <div className="flex items-center gap-2"><input type="radio" name="radio-5" className="radio radio-error" defaultChecked /> <span>{status}</span></div>
                                        }
                                    </td></td>

                                    <th>
                                        {pricePerHour}/h
                                    </th>
                                    <th>
                                        <div className="flex items-center gap-2">

                                            <Link to={`/admin/dashboard/manage/cars/update/${_id}`} className="btn btn-sm bg-gray-950 text-white">Update</Link>
                                            <button onClick={() => handlelDelteCar(_id)} className="btn btn-sm btn-error text-white">Delete</button>
                                        </div>
                                    </th>

                                </tr>) : <p className="py-3">No users found...</p>
                        }



                    </tbody>
                </table>
                <DetailsModal details={details} />
            </div>
        </>
    )
}

const DetailsModal = ({ details }) => {
    console.log(details)
    return <>

        {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
        <dialog id="details_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: details }} />
                </div>
            </div>
        </dialog>
    </>
}
