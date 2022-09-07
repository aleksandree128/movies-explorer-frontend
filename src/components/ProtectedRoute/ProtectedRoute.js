import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ loggedIn , redirectPath, children }) {
    if (!loggedIn) return <Navigate to={redirectPath} replace />
    return children ? children : <Outlet />;

};

