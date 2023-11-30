import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Cart from "./Cart";

const ExclusiveCart = () => {
    const axiosPublic = useAxiosPublic();

    const { data: premiums = [] } = useQuery({
        queryKey: ["articles", "premium"],
        queryFn: async () => {
            const res = await axiosPublic.get("/articles/premium")
            return res.data;
        }
    })


    // const [, , premiums, premimuRefetch] = useArticles();
    console.log("premium", premiums);

    return (
        <div className=" px-8 py-8 my-5">

            <p className=" text-3xl bg-black my-0 py-3 px-7 text-center text-white font-semibold">Subscribe For Exclusive Access</p>
            <div className=" grid md:grid-cols-4 gap-10 pb-16 pt-10 px-7 bg-black">
                {

                    premiums.slice(0, 4).map(item => <Cart key={item._id} item={item}></Cart>)

                }
            </div>




        </div>
    );
};

export default ExclusiveCart;