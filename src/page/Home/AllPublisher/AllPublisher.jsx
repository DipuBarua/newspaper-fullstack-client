import usePublishers from "../../../hooks/usePublishers";

const AllPublisher = () => {
    const [publishers] = usePublishers();

    return (
        <div>
            <p className=" text-2xl font-bold py-1">List of Publishers</p>
            {
                publishers.map(publisher => <>
                    <div className="card card-side bg-base-100 shadow-lg border-2 rounded-none border-black p-1">
                        <figure>
                            <img className=" animate-pulse" src={publisher.image} alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{publisher.name}</h2>
                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default AllPublisher;