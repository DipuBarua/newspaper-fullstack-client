import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://newspaper-fullstack-server-a12b8.vercel.app",
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;