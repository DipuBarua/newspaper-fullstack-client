import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: isAdmin = [], isPending: adminLoading } = useQuery({
        queryKey: [user?.email, "admin"],
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/admin/:${user?.email}`)
            return result.data?.admin;
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;