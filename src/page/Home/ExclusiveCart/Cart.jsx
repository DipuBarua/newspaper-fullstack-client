import { Link } from "react-router-dom";

const Cart = ({ item }) => {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={item.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">$ {item.isPremium}</h2>
                <div className="my-2 border border-black text-center">
                    <p className=" p-1 text-center">{item.title}</p>
                </div>
                <Link to={"/subscription"}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost">SUBSCRIBE NOW</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Cart;