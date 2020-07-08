import axios1 from "axios";

export const getBaseURL = (req) => {
    // return "http://" + req.headers.host;
    return process.env.BASE_URL;
};

const axios = axios1.create();

export const rq = {
    get: axios.get,
    post: axios.post,
};
