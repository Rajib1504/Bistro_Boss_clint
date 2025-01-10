import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loading/Loader";
import UseAuth from "../../hooks/useAuth/UseAuth";
import UseAdmin from "../../hooks/UseAdmin/UseAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }
  <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
