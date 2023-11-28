import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddPublisher = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);

        const publisherInfo = {
            name: data.publisher,
            image: data.logo
        }
        axiosPublic.post("/publishers", publisherInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Publisher has been saved successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>
                    Newspaper | Dashboard | addPublisher
                </title>
            </Helmet>

            <div className="w-4/5 mx-auto shadow-2xl shadow-blue-300 bg-base-100 mb-10">

                <h2 className=" pt-24 text-4xl font-bold text-center text-blue-900">Add Publisher</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=" card-body">
                    <div className=" md:flex gap-10 w-full">

                        <div className=" flex-1 space-y-2">

                            {/* Publisher Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher</span>
                                </label>
                                <input type="text" {...register("publisher", { required: true })} placeholder="Publisher's Name" className="input input-bordered" />
                                {errors.publisher && <span className=" text-red-600">Publisher name is required*</span>}
                            </div>

                            {/* logo  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher logo</span>
                                </label>
                                <input type="url" {...register("logo", { required: true })} placeholder="Publisher logo URL" className="input input-bordered" />
                                {errors.logo && <span className=" text-red-600">Logo URL is required*</span>}
                            </div>

                            {/* Image  */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} className=" file-input" required />
                            </div> */}


                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-blue-900 text-white text-lg">Save</button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddPublisher;