import axios from 'axios';

const publicAxios = axios.create({
    baseURL: "https://next-task-livid.vercel.app",

})
const useAxios = () => {
    return publicAxios;
};

export default useAxios;