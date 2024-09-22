import { useEffect } from "react";
import Loading from "../../components/ui/Loading";
import { useGetAllUsersQuery, useUpdateAUserMutation } from "../../redux/api/userApi"
import toast from "react-hot-toast";

export default function UsersTable() {

    const { data , isLoading, error:getError } = useGetAllUsersQuery(undefined);
    const [updateUser, { data: updateData, error: updateError }] = useUpdateAUserMutation()
 

    useEffect(() => {
        console.log('getError', getError)
        if (getError || updateError) {
            let error = getError || updateError;
            // console.log('error',error);
            error.data.errorSources.map((e) => toast.error(e.message));
        }
    }, [updateError, getError])
    const handleUserStatus = (status: string) => {
        const isConfirmed = window.confirm(`Are you sure? User will be ${status}.`);
        if (isConfirmed) {  
            updateUser({ status: status })
        }
    }
    const handlelDelteUser =()=>{
        const isConfirmed = window.confirm(`Are you sure? User will be deleted.`);
        if (isConfirmed) {  
            updateUser({ isDeleted: true })
        }
    }
    const handleMakeAdmin=()=>{
        const isConfirmed = window.confirm(`Are you sure? User will be admin.`);
        if (isConfirmed) {  
            updateUser({ role:'admin' })
        }
    }
    if (isLoading) return <Loading />
console.log(data?.length)

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
                        {
                           data?.length>0? data?.map(({ name, email, address, phone, role, status }) => <tr>
                           <td>
                               <div className="flex items-center gap-3">
                                   <div className="avatar">
                                       <div className="mask mask-squircle h-12 w-12">
                                           <img
                                               src="https://tse4.mm.bing.net/th?id=OIP.AlIScK6urTegkZ178dAAGgHaHa&pid=Api&P=0&h=220"
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
                                   {role === 'user' && <button onClick={handleMakeAdmin} className="btn btn-sm btn-accent text-white">Make admin</button>}
                                   {status !== 'blocked' ? <button onClick={() => handleUserStatus('blocked')} className="btn btn-sm btn-error text-white">Disable</button> : <button onClick={() => handleUserStatus('active')} className="btn btn-sm btn-success text-white">Active</button>}
                                   <button onClick={handlelDelteUser} className="btn btn-sm btn-error text-white">Delete</button>
                               </div>
                           </th>
                       </tr>):<p className="py-3">No users found...</p>
                        }

                        

                    </tbody>
                </table>
            </div>
        </>
    )
}
