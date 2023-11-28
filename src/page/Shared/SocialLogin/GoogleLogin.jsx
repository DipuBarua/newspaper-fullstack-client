import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    image: result.user?.photoURL
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your google account has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate("/");
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <button onClick={handleGoogleLogIn} className="btn rounded-none hover:bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 border border-black p-2 flex justify-center">
            <button className="text-3xl"><FcGoogle></FcGoogle></button>
        </button>
    );
};

export default GoogleLogin;