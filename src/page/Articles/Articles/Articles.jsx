import useArticles from "../../../hooks/useArticles";
import ArticleCart from "../../Shared/ArticleCart/ArticleCart";

const Articles = () => {
    const [articles] = useArticles();
    console.log(articles);
    return (
        <div>
            {/* {
                articles.map(article => <ArticleCart article={article}></ArticleCart>)
            } */}

        </div>
    );
};

export default Articles;