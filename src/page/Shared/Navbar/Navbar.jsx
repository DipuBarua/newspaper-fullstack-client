import { Link } from "react-router-dom";
import logo from "../../../assets/logo_newspaper.png";
import useAuth from "../../../hooks/useAuth";
// import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useAuth();
    // const [isAdmin, adminLoading] = useAdmin();

    const handleSignOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    const navItems = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/articles"}>All Articles</Link></li>

        {
            user ? <>
                <li><Link to={"/addArticle"}>Add Articles</Link></li>
                <li><Link to={""}>My Articles</Link></li>
                <li><Link to={"/subscription"}>Subscription</Link></li>
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li><Link to={"/"} onClick={handleSignOut}>LogOut</Link></li>
            </>
                :
                <>
                    <li><Link to={"/login"}>LogIn</Link></li>
                </>
        }
    </>
    // <li><Link to={""}>Premium Articles</Link></li>
    // {
    //     isAdmin && <>
    //         {adminLoading()}
    //         <li><Link to={"/dashboard"}>Dashboard</Link></li>
    //     </>
    // }

    // const dropDownMenu = <>
    //     <summary>Parent</summary>
    //     <ul className="p-2 bg-black bg-opacity-30 text-white">
    //         <li><a>Submenu 1</a></li>
    //         <li><a>Submenu 2</a></li>
    //     </ul>

    return (
        <div className="navbar max-w-screen-xl fixed z-10 bg-black bg-opacity-30 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-1">
                        {navItems}
                        {/* {dropDownMenu} */}
                    </ul>
                </div>
                <a className=" w-2/3"><img src={logo} alt="logo.img" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1">
                    {navItems}
                    {/* <li tabIndex={0}>
                    <details>
                        {dropDownMenu}
                    </details>
                </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p className=" px-2 text-sm font-semibold">{user.displayName}</p>
                        <Link to={"/userProfile"}>
                            <div className="avatar online">
                                <div className="w-10 rounded-full mr-2 ring ring-black ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                        </Link>
                    </>
                        :
                        <>
                            <Link to={"/signup"}>
                                <button className=" btn btn-ghost btn-outline hover:bg-gray-500 hover:text-white">Sign Up</button>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;