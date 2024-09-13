import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    // const auth = useAuth();
    const auth = true;
    return auth ? <>{children}</> : <Navigate to="/login" />;
}
