import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    return (
        <div>
             <Helmet>
                <title>Newspaper | Dashboard | Admin</title>
            </Helmet>

            <h1 className=" text-center text-4xl font-bold text-blue-900 py-16 bg-gray-300">Welcome to Admin Panel</h1>
        </div>
    );
};

export default AdminHome;