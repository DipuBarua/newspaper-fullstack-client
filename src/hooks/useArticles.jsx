import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useArticles = () => {
    const axiosPublic = useAxiosPublic();
    //approve articles featching for normal users... 
    // [Tanstack query makes fetching, caching, synchronizing and updating server state] 
    const { data: articles = [], refetch } = useQuery({
        queryKey: ["articles", "approved"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articles/approved")
            return res.data;
        }
    })

    // const { data: premiums = [], refetch: premimuRefetch } = useQuery({
    //     queryKey: ["articles", "premium"],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get("/articles/premium")
    //         return res.data;
    //     }
    // })


    return [articles, refetch]
};

export default useArticles;