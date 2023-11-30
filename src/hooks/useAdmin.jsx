import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: isAdmin, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users/admin/${user?.email}`)
            return result.data?.admin;
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;