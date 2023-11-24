import moment from "moment/moment";
import logo from "../../../assets/newpaper-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white">
            <aside>
                <img className=" w-1/2 my-2" src={logo} alt="" />
                <p className="font-bold">
                    ACME Industries Ltd. <br />Providing reliable tech since 1992
                </p>
                <p>Copyright &copy;<span>{moment().format('YYYY')}</span> - All right reserved by Newspaper</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to={"/"} className=" p-2 text-xl bg-blue-700">
                        <FaFacebookF />
                    </Link>
                    <Link to={"/"} className=" p-2 text-xl bg-blue-500">
                        <FaTwitter />
                    </Link>
                    <Link to={"/"} className=" p-2 text-xl bg-red-500">
                        <FaYoutube />
                    </Link>
                    <Link to={"/"} className=" p-2 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <FaInstagram />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;