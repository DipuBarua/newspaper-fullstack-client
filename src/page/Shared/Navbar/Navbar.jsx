import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/"}>Add Articles</Link></li>
        <li><Link to={"/"}>All Articles</Link></li>
        <li><Link to={"/"}>Subscription</Link></li>
        <li><Link to={"/"}>Dashboard</Link></li>
        <li><Link to={"/"}>My Articles</Link></li>
        <li><Link to={"/"}>Premium Articles</Link></li>
    </>

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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-2">
                        {navItems}
                        {/* {dropDownMenu} */}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Newspaper</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navItems}
                    {/* <li tabIndex={0}>
                    <details>
                        {dropDownMenu}
                    </details>
                </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <p className=" px-2">{"Dipankar Barua"}</p>
                <Link to={""}>
                    <div className="avatar online">
                        <div className="w-8 rounded-full mr-2">
                            <img src={"https://i.ibb.co/6NgD2y6/girl2.jpg"} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;