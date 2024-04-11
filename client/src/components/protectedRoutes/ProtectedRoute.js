import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = () => {
    let navigate = useNavigate()
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/login")
    })
    return <Outlet />
}
export default ProtectedRoute
