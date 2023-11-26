import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disable, setDisable] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleCaptcha = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue) === true) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    };

    useEffect(() => {

        loadCaptchaEnginge(4);

    }, []);

    return (
        <div>
            <Helmet>
                <title>Newspaper | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-blue-50 ">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl shadow-blue-300 bg-base-100 rounded-none my-20">

                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className=" text-center text-3xl font-bold">Log In</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* react captcha  */}
                        <div className="form-control mt-2">
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                onBlur={handleCaptcha}
                                placeholder="type the captcha above"
                                className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input disabled={disable} type="submit" value="LogIn" className="btn btn-outline hover:bg-blue-600 rounded-none text-xl" />
                        </div>

                        {/* SocialLogin */}


                        <div className=" border border-black p-2">
                            <p>Have an account? if no, please <Link to={'/signup'}><button className="btn-link font-semibold text-blue-600">Sign Up</button></Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;