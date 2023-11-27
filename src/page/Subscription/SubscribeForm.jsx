import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const SubscribeForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => console.log(data);

    return (
        <div>
            <Helmet>
                <title>
                    Newspaper | Subscription
                </title>
            </Helmet>

            <div className="w-full shadow-xl bg-base-100 mb-16 ">

                <form onSubmit={handleSubmit(onSubmit)} className=" card-body">
                    {/* Subscription Period  */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Subscription Period</span>
                        </label>
                        <select defaultValue={'oneMunite'} {...register("subscription", { required: true })} className=" p-2">
                            <option disabled value="default">Select Days</option>
                            <option value="oneMunite">1 munite</option>
                            <option value="fiveDays">5 Days</option>
                            <option value="tenDays">10 Days</option>
                            <option value="thirtyDays">30 Days</option>
                        </select>
                    </div>
                    {errors.subscription && <span className=" text-red-600">Select subscription period to payment*</span>}


                    <div className="form-control mt-5">
                        <Link to={"/payment"}>
                            <button className="btn btn-primary hover:bg-slate-500">Payment</button>
                        </Link>
                    </div>


                </form>
            </div>


        </div>
    );
};

export default SubscribeForm;