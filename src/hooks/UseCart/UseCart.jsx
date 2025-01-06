import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import UseAuth from "../useAuth/UseAuth";

const UseCart = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
