import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../useAuth/UseAuth";

const axiossecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuth();
  //request interceptor to add authorization header for every secure call to the api
  axiossecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("reques stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  //intercepts 401 and 403 status
  axiossecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      //we can use async and await for fetch the logout btn or we can do it with then too
      const status = error.response.status;
      // console.log("status error in the interceptor:", status);
      //for 401 or 403 layout the user and move the user to the login page
      if (status === 401 || 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiossecure;
};

export default useAxiosSecure;
