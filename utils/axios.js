import axios1 from "axios";

export const getBaseURL = (req) => {
    // return "http://" + req.headers.host;
    try {
        if (process.env.BASE_URL) return process.env.BASE_URL;
    } catch (e) {}
    let url = window.location.href;
    let arr = url.split("/");
    return arr[0] + "//" + arr[2];
};

const axios = axios1.create();

export const rq = {
    get: axios.get,
    post: axios.post,
};
