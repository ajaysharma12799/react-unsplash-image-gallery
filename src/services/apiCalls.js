import axios from "axios";

export const fetchAllImage = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos?per_page=100&client_id=${process.env.REACT_APP_AccessKey}`);
    return response;
}

export const fetchAllCategories = async () => {
    const response = await axios.get(`https://api.unsplash.com/topics?per_page=100&client_id=${process.env.REACT_APP_AccessKey}`);
    return response;
}