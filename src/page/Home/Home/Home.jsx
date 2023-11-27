import { Helmet } from "react-helmet-async";
import AllPublisher from "../AllPublisher/AllPublisher";
import Statistic from "../Statistic/Statistic";
import TrendArticles from "../TrendArticles/TrendArticles";
import Plans from "../Plans/Plans";
import BreakingNews from "../../Shared/BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div className=" min-h-screen pt-16">
            <Helmet>
                <title>
                    Newspaper | Home
                </title>
            </Helmet>

            <BreakingNews></BreakingNews>
            <div className=" mt-12">
                <TrendArticles></TrendArticles>
                <AllPublisher></AllPublisher>
                <Statistic></Statistic>
                <Plans></Plans>
            </div>
        </div>
    );
};

export default Home;