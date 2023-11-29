import { Helmet } from "react-helmet-async";
import ArticleTable from "./ArticleTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllArticles = () => {

    const axiosPublic = useAxiosPublic();

    const { data: articles = [], refetch } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articles")
            return res.data;
        }
    })
    // console.log(articles);

    return (
        <div>
            <Helmet>
                <title>Newspaper | Dashboard | allArticles</title>
            </Helmet>

            <div className=" flex justify-evenly mb-5 pt-5 bg-gray-300 text-blue-900 py-5 mx-10">
                <h2 className=" text-3xl font-bold">All Articles</h2>
                <h2 className=" text-3xl font-bold">Total:{articles.length} </h2>
            </div>

            <div className="overflow-x-auto pl-8 pt-5">
                <table className="table table-xs table-pin-rows table-pin-cols table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>AUTHOR_IMG.</th>
                            <th>AUTHOR</th>
                            <th>EMAIL</th>
                            <th>ARTICLE_TITLE</th>
                            <th>POSTED_DATE</th>
                            <th>STATUS</th>
                            <th>PUBLISHER</th>
                            <th>APPROVE</th>
                            <th>DECLINE</th>
                            <th>DELETE</th>
                            <th>PREMIUM</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* For single row  */}
                        {
                            articles.map((article, index) => <ArticleTable
                                index={index}
                                key={article._id}
                                item={article}
                                refetch={refetch}
                            ></ArticleTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllArticles;