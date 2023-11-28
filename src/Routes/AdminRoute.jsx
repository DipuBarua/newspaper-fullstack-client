import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, adminLoading] = useAdmin();
    const location = useLocation();

    if (loading || adminLoading) {
        return <div className=" min-h-screen text-center py-48 space-x-1">
            <span className="loading loading-bars loading-lg text-blue-900"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;