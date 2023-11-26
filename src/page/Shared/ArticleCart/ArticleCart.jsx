
const ArticleCart = ({ article }) => {
    // const { title, image, description, publisher, tag } = article;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body hover:bg-black hover:text-white rounded-b-xl">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary">Details</button>
                    <div>-<span className=" ml-2 font-bold">{publisher}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCart;