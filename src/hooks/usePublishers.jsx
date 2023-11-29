import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePublishers = () => {
    const axiosPublic = useAxiosPublic();

    // tanstack query to fetch all publishers data 
    const { data: publishers = [], refetch, isPending: loadingPublishers, } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get("/publishers")
            return result.data;
        }
    })

    return [publishers, refetch, loadingPublishers];
};

export default usePublishers;