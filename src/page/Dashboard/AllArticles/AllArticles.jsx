import { Helmet } from "react-helmet-async";

const AllArticles = () => {
    return (
        <div>
            <Helmet>
                <title>Newspaper | Dashboard | allArticles</title>
            </Helmet>

            <p className=" text-center text-3xl">All Articles controled by admin</p>
        </div>
    );
};

export default AllArticles;