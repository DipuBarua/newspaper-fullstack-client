import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticleCart = ({ item }) => {
    const { _id, title, image, description, publisher, tag } = item;

    // TODO: for views count
    const [views, setViews] = useState(0);
    const handleViews = () => {
        setViews(views + 1);
        console.log(views);
    }

    // useEffect(() => {
    // }, [])

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="image loading..." /></figure>
            <div className="card-body hover:bg-black hover:text-white rounded-b-2xl">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions justify-between">
                    <div>-<span className=" ml-2 font-bold">{publisher}</span></div>
                    <Link to={`/articleDetails/${_id}`}>
                        <button onClick={handleViews} className="btn btn-outline hover:btn-warning">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCart;