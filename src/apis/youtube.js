import axios from 'axios';

const APIKEY = "AIzaSyA72BhlXFkZX2yxhsmW9P838eBr98b85UA";

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: APIKEY,
        maxResults: 5,
        type: "video"
    }
});

export default youtube;