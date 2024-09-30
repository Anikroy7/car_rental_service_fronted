import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { useEffect, useState } from "react";
import { logout, setUser } from "../../redux/features/auth/authSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

export default function Dashboard() {
    const [isOpenMU, setIsOpenMU] = useState(true);
    const [isOpenMB, setIsOpenMB] = useState(true);

    const dispatch = useAppDispatch();
    const navigate= useNavigate()
    //login condition
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(() => {
        if (userInfo?.email) {
            dispatch(setUser({ ...userInfo }));
        }
    }, [userInfo])
    const location = useLocation();
    const paths = location.pathname.split("/");
    // console.log(paths)
    const handleLogout = () => {
      dispatch(logout({}));
      localStorage.removeItem('userInfo');
      navigate('/login')

    }
    return (
        <>
            <section className="">
                <div className="flex h-screen">
                    {/* Drawer component for sidebar */}
                    <div className="flex-[10%] drawer lg:drawer-open ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                Open drawer
                            </label>
                        </div>
                        <div className="drawer-side z-40">
                            <ul className="bg-gray-300  min-h-full w-72 p-4">
                                {/* Sidebar content */}
                                <div className="font-bold text-2xl text-center my-2"><Link to={'/'}>EasyRide</Link></div>
                                <li><Link to="/admin/dashboard" className={`btn btn-wide justify-start mt-6 hover:bg-gray-900 hover:text-white ${paths.length < 4 && 'bg-black text-white'}`}>Dashboad</Link></li>
                                {
                                    userInfo?.role === 'admin' && <>

                                        <li><Link to="/admin/dashboard/manage/users" className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white ${paths.includes('users') && 'bg-black text-white'}`}>Manage Users</Link></li>
                                        <li>{/* <a href="#" className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white `}>
                                    </a> */}</li>
                                        <li>
                                            <details open={isOpenMU} onClick={() => setIsOpenMU(!isOpenMU)}>
                                                <summary className={` btn btn-wide justify-start mt-2 text-black flex items-center justify-between`}>

                                                    <span>Manage Cars</span>                                            <span className="ml-2">
                                                        {isOpenMU ? <FaChevronUp /> : <FaChevronDown />}
                                                    </span>
                                                </summary>
                                                <ul className="ml-7">
                                                    <li>
                                                        <Link to="/admin/dashboard/manage/cars/add"
                                                            className={`btn btn-sm w-full justify-start mt-2 hover:bg-gray-900 hover:text-white ${paths.includes('userds') && 'bg-black text-white'}`}>
                                                            Add Car
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/admin/dashboard/manage/cars/all"
                                                            className={`btn btn-sm w-full justify-start mt-2 hover:bg-gray-900 hover:text-white ${paths.includes('usefrs') && 'bg-black text-white'}`}>
                                                            All Cars
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details open={isOpenMB} onClick={() => setIsOpenMB(!isOpenMB)}>
                                                <summary className={` btn btn-wide justify-start mt-2 text-black flex items-center justify-between`}>

                                                    <span>Manage Bookings</span>
                                                    <span className="ml-2">
                                                        {isOpenMB ? <FaChevronUp /> : <FaChevronDown />}
                                                    </span>
                                                </summary>
                                                <ul className="ml-7">
                                                    <li>
                                                        <Link to="/admin/dashboard/manage/bookings/all"
                                                            className={`btn btn-sm w-full justify-start mt-2 hover:bg-gray-900 hover:text-white ${paths.includes('userds') && 'bg-black text-white'}`}>
                                                            All Bookings
                                                        </Link>
                                                    </li>

                                                
                                                </ul>
                                            </details>
                                        </li></>
                                }
                                {
                                    userInfo?.role==='user' && <li><Link to={`/user/dashboard/manage/bookings/my-bookings`} className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white `}>My Bookings</Link></li>
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="flex-[90%] flex flex-col">
                        {/* Navbar */}
                        <nav className="bg-base-200 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold">Dashboard</h1>
                                <div className="flex items-center space-x-4">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li>
                                                <Link to={'/user/dashboard/manage/user/my-profile'} className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                            <li><button onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Dashboard content */}
                        <div className="p-6">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />

        </>
    );
}
