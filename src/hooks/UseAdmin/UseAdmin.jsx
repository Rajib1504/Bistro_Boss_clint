import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const UseAdmin = () => {
  const { user } = UseAuth();
  const axiossecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiossecure.get(`/user/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
