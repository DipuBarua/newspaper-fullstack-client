import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import TrendingArticles from "../trendingArticles/trendingArticles";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Newspaper | Home
                </title>
            </Helmet>

            <Navbar></Navbar>
            {/* <p className=" text-2xl">Home</p> */}
            <TrendingArticles></TrendingArticles>
        </div>
    );
};

export default Home;