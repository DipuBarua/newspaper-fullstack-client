
const ArticleCart = ({ item }) => {
    const { title, image, description, publisher, tag } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="image loading..." /></figure>
            <div className="card-body hover:bg-black hover:text-white rounded-b-xl">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions justify-between">
                    <div>-<span className=" ml-2 font-bold">{publisher}</span></div>
                    <button className="btn btn-outline hover:btn-warning">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCart;