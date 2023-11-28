import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();

    // tanstack query to fetch all users data 
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get("/users")
            return result.data
        }
    })

    const handleAdminRole = () => {

    }

    const handleUserDelete = () => {

    }
    console.log(users);
    return (
        <div>
            <div className=" flex justify-evenly mb-5 pt-5 bg-gray-300 text-blue-900 py-5 mx-10">
                <h2 className=" text-3xl font-bold">All Users</h2>
                <h2 className=" text-3xl font-bold">Total Users:{users.length} </h2>
            </div>

            <div className="overflow-x-auto pl-8 pt-5">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* single row  */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>

                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-lg bg-gray-300">
                                            <img src={user.image} alt="__user__" />
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="font-bold">{user.name}</div>
                                </td>

                                <td>
                                    <div className="font-bold">{user.email}</div>
                                </td>

                                <th>
                                    {(user.role === "admin") ?
                                        <p className=" text-gray-300">Admin</p>
                                        :
                                        <button onClick={() => handleAdminRole(user._id)} className="btn border border-blue-900 hover:bg-gray-300">
                                            <FaUser className=" text-blue-900" />
                                        </button>
                                    }
                                </th>

                                <th>
                                    <button onClick={() => handleUserDelete(user._id)} className="btn btn-ghost">
                                        <FaTrash className=" text-xl text-red-600" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;