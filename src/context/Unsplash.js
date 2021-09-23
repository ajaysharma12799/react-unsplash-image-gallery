import {createContext, useState, useEffect} from "react";
import { fetchAllImage } from '../services/apiCalls';

export const UnsplashContext = createContext(null);

export const GlobalUnsplashProvider = ({children}) => {
    const [response, setResponse] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resp = await fetchAllImage();
        setResponse(resp.data);
    }, []);

    return (
        <UnsplashContext.Provider value={{response, setResponse}}>
            {children}
        </UnsplashContext.Provider>
    );
}