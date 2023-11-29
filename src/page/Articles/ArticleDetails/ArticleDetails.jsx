import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ArticleDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    console.log('details ', id);

    // tanstack query to fetch articles 
    const { data: article = [], refetch } = useQuery({
        queryKey: ['details', id],
        queryFn: async () => {
            const result = await axiosPublic.get(`/articles/details/${id}`)
            return result.data
        }
    })
    console.log(article);

    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={article[0]?.image} />
                <div className=" justify-end">
                    <div className="py-6 text-right">
                        <span className=" p-1 border border-black">{article[0]?.tag}</span>
                    </div>
                    <h1 className="text-5xl font-bo[0]?ld">{article[0]?.title}</h1>
                    <p className="py-6">{article[0]?.description}</p>
                    <p className="py-6">{article[0]?.publisher}</p>
                    <div className="py-6 text-right">
                        <Link to={'/subscription'}>
                            <button className="btn btn-outline rounded-none">SUBSCRIBE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;