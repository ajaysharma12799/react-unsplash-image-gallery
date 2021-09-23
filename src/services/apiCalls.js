import axios from "axios";

export const fetchAllImage = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_AccessKey}`);
    return response;
}