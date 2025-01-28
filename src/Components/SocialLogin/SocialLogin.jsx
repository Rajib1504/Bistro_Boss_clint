import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/useAuth/UseAuth";
import UseAxiosPublic from "../../hooks/AxiosSecure/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const { googleSignin } = UseAuth();
  const handleGoogle = () => {
    googleSignin().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((res) => {
        const user = res.data;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider">or</div>
      <button
        onClick={handleGoogle}
        className="btn btn-primary mb-2 mx-auto btn-success hover:scale-100 transation-100 flex gap-2"
      >
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
