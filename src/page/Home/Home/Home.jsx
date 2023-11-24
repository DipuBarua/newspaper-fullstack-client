import { Helmet } from "react-helmet-async";
import AllPublisher from "../AllPublisher/AllPublisher";
import Statistic from "../Statistic/Statistic";
import TrendArticles from "../TrendArticles/TrendArticles";
import Plans from "../Plans/Plans";

const Home = () => {
    return (
        <div className=" min-h-screen">
            <Helmet>
                <title>
                    Newspaper | Home
                </title>
            </Helmet>

            <TrendArticles></TrendArticles>
            <AllPublisher></AllPublisher>
            <Statistic></Statistic>
            <Plans></Plans>
        </div>
    );
};

export default Home;