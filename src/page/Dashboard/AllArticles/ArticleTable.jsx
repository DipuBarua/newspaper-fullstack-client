import { FaCrown, FaForward, FaStop, FaTrash } from "react-icons/fa";

const ArticleTable = ({ item, index }) => {
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
                <div className="font-bold">{item?.author_email}</div>
            </td>

            {/* ARTICLE Title */}
            <td>
                <div className="font-bold">{item?.title}</div>
            </td>

            {/* POSTED DATE */}
            <td>
                <div className="font-bold">{item.posted_date}</div>
            </td>

            {/* STATUS */}
            <td>
                <div className="font-bold">{item?.status}</div>
            </td>

            {/* PUBLISHER name */}
            <td>
                <div className="font-bold">{item?.publisher}</div>
            </td>

            {/* APPROVE */}
            <td>
                <button onClick={() => ''} className="btn btn-ghost">
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
                <button onClick={() => ''} className="btn btn-ghost">
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