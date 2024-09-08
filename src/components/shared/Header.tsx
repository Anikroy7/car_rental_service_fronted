import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";

export default function Header() {
  const user = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout({}));
    localStorage.removeItem('userInfo')
  }
  const navItems = <>
    <li>
      <Link to={'/'}>Home</Link>
    </li>

    <li>
      <Link to={'/about'}>About us</Link>
    </li>
    <li>
      <Link to={'/All Cars'}>All Cars</Link>
    </li>
  </>
  return (
    <>
      <div className="navbar bg-black text-white font-bold shadow-md sticky top-0 z-50 h-[6rem]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          {/* <img width={50} src="https://tse2.mm.bing.net/th?id=OIP.nR2RlFpx5KeaZ_ujqNksBAHaGa&pid=Api&P=0&h=220" alt="" />  */}    EasyRide Rentals   </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        {user?.email ? <div onClick={handleLogout} className="navbar-end">
          <span className="btn">Logout</span>
        </div> : <>
          <div onClick={handleLogout} className="navbar-end">
            <Link to={'/signup'} className=" mr-5">Signup</Link>
            <Link to={'/login'} className="">Login</Link>
          </div>
        </>}
      </div>
    </>
  );
}
