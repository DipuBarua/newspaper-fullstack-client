import { Helmet } from "react-helmet-async";


const UserHome = () => {
    return (
        <div>
            <Helmet>
                <title>Newspaper | Dashboard | User</title>
            </Helmet>

            <h1 className=" text-center text-4xl font-bold text-blue-900 py-16 bg-gray-300">Welcome to USER Panel</h1>
        </div>
    );
};

export default UserHome;