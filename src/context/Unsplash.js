import {createContext, useState, useEffect} from "react";
import { fetchAllCategories, fetchAllImage } from '../services/apiCalls';

export const UnsplashContext = createContext(null);

export const GlobalUnsplashProvider = ({children}) => {
    const [response, setResponse] = useState([]);
    const [categories, setCategories] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resp = await fetchAllImage();
        const categoryResponse = await fetchAllCategories();
        
        setResponse(resp.data);
        setCategories(categoryResponse.data);
    }, []);

    return (
        <UnsplashContext.Provider value={{response, setResponse, categories, setCategories}}>
            {children}
        </UnsplashContext.Provider>
    );
}