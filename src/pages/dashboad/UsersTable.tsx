import Loading from "../../components/ui/Loading";
import { useGetAllUsersQuery } from "../../redux/api/userApi"

export default function UsersTable() {

    const { data, error, isLoading } = useGetAllUsersQuery(undefined);
    if (isLoading) return <Loading />
    console.log(data, error)
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(({ name, email, address, phone, role, status }) => <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{name}</div>
                                            <div className="text-sm opacity-50">{address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td>{phone}</td>
                                <td>{role}</td>
                                <td >
                                    {status === 'active' ? <div className="flex items-center gap-2"><input type="radio" name="radio-5" className="radio radio-success" defaultChecked /> <span>{status}</span></div> : <div className="flex items-center gap-2"><input type="radio" name="radio-5" className="radio radio-error" defaultChecked /> <span>{status}</span></div>
                                    }



                                </td>

                                <th>
                                    <div className="flex items-center gap-2">

                                        {role === 'user' && <button className="btn btn-sm btn-accent text-white">Make admin</button>}
                                        {status !== 'blocked' ? <button className="btn btn-sm btn-warning text-white">Disable</button> : <button className="btn btn-sm btn-warning text-white">Active</button>}
                                        <button className="btn btn-sm btn-error text-white">Delete</button>
                                    </div>
                                </th>
                            </tr>)
                        }

                        {/* row 2 */}

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>
        </>
    )
}
