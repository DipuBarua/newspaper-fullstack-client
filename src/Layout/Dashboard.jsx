import { NavLink, Navigate, Outlet } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { FaAddressBook, FaAddressCard, FaArchive, FaBookmark, FaChartArea, FaHome, FaSubscript, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
    const [articles] = useArticles();
    const isAdmin = 1;

    return (
        <div className=" flex">
            {/* Dashboard Slidebar  */}
            <div className=" w-64 min-h-screen bg-slate-700 text-white font-semibold">
                <li className=" menu-title text-black">
                    <p className=" text-3xl">Newspaper</p>
                    Dashboard
                </li>
                <ul className=" menu">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={'/dashboard/admin'}>
                                        <FaHome />
                                        Admin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allUsers'}>
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/allArticles'}>
                                        <FaArchive />
                                        All Articles
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addPublisher'}>
                                        <FaAddressBook></FaAddressBook>
                                        Add Publisher
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/statistics'}>
                                        <FaChartArea></FaChartArea>
                                        Statistics
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <Navigate to={"/"}></Navigate>
                            </>

                    }

                    <div className=" divider"></div>

                    {/* shared nav link  */}
                    <li>
                        <NavLink to={'/'}>
                            <FaHome className=""></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/addArticle'}>
                            <FaAddressCard></FaAddressCard>
                            Add Article
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/articles'}>
                            <FaArchive></FaArchive>
                            All articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/subscription'}>
                            <FaBookmark></FaBookmark>
                            Subscription
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/myArticles'}>
                            <FaSubscript></FaSubscript>
                            My Articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/userProfile'}>
                            <FaUser></FaUser>
                            My Profile
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Contents  */}
            <div className=" flex-1 text-center">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;