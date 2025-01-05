import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPrvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loading/Loader";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, Loading } = useContext(AuthContext);
  if (Loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ form: location }} replace></Navigate>;
};

export default PrivateRouter;
