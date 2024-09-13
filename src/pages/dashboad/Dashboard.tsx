import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
    const location = useLocation();
    const paths = location.pathname.split("/");
    console.log(paths)

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
                                <li><Link to="/admin/dashboard/manage/users" className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white ${paths.includes('users')&& 'bg-black text-white'}`}>Manage Users</Link></li>
                                <li><a href="#" className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white `}>Manage Cars</a></li>
                                <li><a href="#" className={`btn btn-wide justify-start mt-2 hover:bg-gray-900 hover:text-white `}>Manage Return Cars</a></li>
                                <li><a href="#" className={`btn btn-wide justify-start my-2 hover:bg-gray-900 hover:text-white `}>Manage Bookings</a></li>
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
                                    <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
                                    <button className="btn btn-primary">Search</button>
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


        </>
    );
}
