import { FaCrown, FaForward, FaStop, FaTrash } from "react-icons/fa";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ArticleTable = ({ item, index, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleApproval = (id) => {
        axiosSecure.patch(`/articles/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Article has been approved.",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/articles/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Article has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    return (
        <tr >
            <th>
                <label>
                    {index + 1}
                </label>
            </th>

            {/* AUTHOR IMG. */}
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-lg bg-gray-300">
                        <img src={item?.author_image} alt="__user__" />
                    </div>
                </div>
            </td>

            {/* AUTHOR Name  */}
            <td>
                <div className="font-bold">{item?.author_name}</div>
            </td>

            {/* EMAIL */}
            <td>
                <div className="">{item?.author_email}</div>
            </td>

            {/* ARTICLE Title */}
            <td>
                <div className="font-bold">{item?.title}</div>
            </td>

            {/* POSTED DATE */}
            <td>
                <div className="">{item.posted_date}</div>
            </td>

            {/* STATUS */}
            <td>
                <div className="font-bold">{item?.status}</div>
            </td>

            {/* PUBLISHER name */}
            <td>
                <div className="">{item?.publisher}</div>
            </td>

            {/* APPROVE */}
            <td>
                <button onClick={() => handleApproval(item._id)} className="btn btn-ghost">
                    <FaForward className=" text-xl text-green-600" />
                </button>
            </td>

            {/* DECLINE */}
            <td>
                <button onClick={() => ''} className="btn btn-ghost">
                    <FaStop className=" text-xl text-red-600" />
                </button>
            </td>

            {/* DELETE */}
            <td>
                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">
                    <FaTrash className=" text-xl text-red-600" />
                </button>
            </td>

            {/* PREMIUM */}
            <td>
                <button onClick={() => ''} className="btn border border-amber-700 hover:bg-black">
                    <FaCrown className=" text-xl text-amber-500" />
                </button>
            </td>

        </tr>
    );
};

export default ArticleTable;