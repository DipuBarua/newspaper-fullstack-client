import useArticles from "../../../hooks/useArticles";
import ArticleCart from "../../Shared/ArticleCart/ArticleCart";

const TrendArticles = () => {
    const [articles] = useArticles();

    return (
        <div>
            <p className=" text-2xl"> minimum 6 trending articles are here...</p>
            {
                articles.slice(1, 7).map(article => <ArticleCart key={article._id} item={article}></ArticleCart>)
            }
        </div>
    );
};

export default TrendArticles;