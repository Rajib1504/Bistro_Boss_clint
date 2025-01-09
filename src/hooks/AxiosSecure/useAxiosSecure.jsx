import axios from "axios";

const axiossecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  axiossecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("reques stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return axiossecure;
};

export default useAxiosSecure;
