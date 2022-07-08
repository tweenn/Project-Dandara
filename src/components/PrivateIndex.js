import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContex";

export const PrivateRoutes = () => {

    const { signed } = useContext(AuthContext);
    const { signedEmail } = useContext(AuthContext);
    return signed || signedEmail ? <Outlet /> : <Navigate to="/" />;

};