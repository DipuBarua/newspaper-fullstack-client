import { Helmet } from "react-helmet-async";
import AllPublisher from "../AllPublisher/AllPublisher";
import Statistic from "../Statistic/Statistic";
import TrendArticles from "../TrendArticles/TrendArticles";
import Plans from "../Plans/Plans";
import BreakingNews from "../../Shared/BreakingNews/BreakingNews";
import moment from "moment/moment";

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
                {
                    <h1 className=" text-center font-semibold">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
                }
                <div className=" divider"></div>

                <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className=" md:col-span-3">
                        <TrendArticles></TrendArticles>
                    </div>
                    <div className="">
                        <AllPublisher></AllPublisher>
                    </div>
                </div>

                <Statistic></Statistic>

                <div className=" my-16">
                    <Plans></Plans>
                </div>

            </div>
        </div>
    );
};

export default Home;