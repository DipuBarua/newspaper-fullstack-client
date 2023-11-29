import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useArticles = () => {
    const axiosPublic = useAxiosPublic();
    // TODO: articles approval code will wrok from here... 

    // Tanstack query makes fetching, caching, synchronizing and updating server state 
    const { data: articles = [], refetch } = useQuery({
        queryKey: ["articles", "approved"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articles/approved")
            return res.data;
        }
    })

    return [articles, refetch]
};

export default useArticles;