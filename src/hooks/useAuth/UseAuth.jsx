import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPrvider";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;
