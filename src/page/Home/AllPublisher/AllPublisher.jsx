import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllPublisher = () => {
    const axiosPublic = useAxiosPublic();

    // tanstack query to fetch all users data 
    const { data: publishers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get("/publishers")
            return result.data;
        }
    })

    return (
        <div>
            
            <p className=" text-2xl font-bold py-1">List of Publishers</p>
            {
                publishers.map(publisher => <>
                    <div className="card card-side bg-base-100 shadow-lg border-2 rounded-none border-black">
                        <figure><img className=" animate-pulse" src={publisher.image} alt="img" /></figure>
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