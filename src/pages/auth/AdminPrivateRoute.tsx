import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";

export const AdminPrivateRoute = ({ children }) => {
    // const auth = useAuth();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const auth = userInfo?.email && userInfo?.role === 'admin';
    const location = useLocation();
    const dispatch = useAppDispatch();
    if (!auth) {
        localStorage.removeItem('userInfo');
        dispatch(logout(undefined))

    }
    return auth ? <>{children}</> : <>
        <Navigate to={`/login?redirect_url=${location.pathname}`} />
    
    </>;
}
