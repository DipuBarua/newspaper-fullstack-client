import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticle = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        // console.log(data);
        const imgFile = { image: data.image[0] }
        // console.log(imgFile);
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        });
        console.log(res.data);

        // after uploading img to imgbb, now we have to post data to server
        if (res.data.success) {
            const articleInfo = {
                title: data.title,
                tag: data.tag,
                publisher: data.publisher,
                description: data.description,
                image: res.data.data.display_url,

            }

            const infoRes = await axiosPublic.post("/articles", articleInfo);
            console.log(infoRes.data);

            reset();

            if (infoRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your article has been uploaded successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <Helmet>
                <title>
                    Newspaper | addArticle
                </title>
            </Helmet>

            <div className="w-4/5 mx-auto shadow-2xl shadow-blue-300 bg-base-100 mb-10">

                <h2 className=" pt-24 text-4xl font-bold text-center">Add Your Article</h2>

                <form onSubmit={handleSubmit(onSubmit)} className=" card-body">
                    <div className=" md:flex gap-10 w-full">

                        <div className=" flex-1 space-y-2">
                            {/* Title  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} placeholder="Title" className="input input-bordered" required />
                            </div>

                            {/* tags  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tag</span>
                                </label>
                                <select defaultValue={'default'} {...register("tag", { required: true })} className=" p-2">
                                    <option disabled value="default">Select a tag</option>
                                    <option value="business">Business </option>
                                    <option value="education">Education</option>
                                    <option value="food">Food</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="politics">Politics</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Technology</option>
                                    {/* <option value="environment">Environment</option> */}
                                    {/* <option value="social">Social Issues</option> */}
                                    {/* <option value="health">Health</option> */}
                                    {/* <option value="science">Science</option> */}
                                    {/* <option value="religion">Religion</option> */}
                                    <option value="publisher">Publisher</option>
                                </select>
                            </div>

                            {/* Image  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} className=" file-input" required />
                            </div>
                        </div>


                        <div className="flex-1 space-y-2">
                            {/* publisher  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher</span>
                                </label>
                                <select defaultValue={'default'} {...register("publisher", { required: true })} className=" p-2">
                                    <option disabled value="default">Select your publisher</option>
                                    <option value="TheNewYorkTimes">The New York Times</option>
                                    <option value="BBCNews">BBC News</option>
                                    <option value="CNN">CNN</option>
                                    <option value="Reuters">Reuters</option>
                                    <option value="TimeMagazine">Time Magazine</option>
                                    <option value="Forbes">Forbes</option>
                                    <option value="AlJazeera">Al Jazeera</option>
                                </select>
                            </div>

                            {/* publisher  */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher</span>
                                </label>
                                <input type="text" {...register("publisher", { required: true })} placeholder="Publisher" className="input input-bordered" required />
                            </div> */}

                            {/* description  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-md w-full max-w-xl" required />
                            </div>

                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddArticle;