import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex fixed z-10">
            <button className=" btn btn-ghost">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} >
                <p className=" text-black font-bold mr-10">Global Tech Giant Unveils Groundbreaking AI Advancements, Promising Revolutionary Impact Across Industries. |</p>
                <Link className=" mr-10 text-blue-700">https://www.npmjs.com/package/react-fast-marquee |</Link>
                <Link className=" mr-10 text-red-700 font-semibold">Hot Line: +088-8675678798  +971-7656577 |</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;