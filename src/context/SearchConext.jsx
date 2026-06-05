import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);


export const SearchContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bedRoomNum, setBedRoomNum] = useState("");

    const searchState = {
        name,
        setName,
        location,
        setLocation,
        bedRoomNum,
        setBedRoomNum
    };

    return (
        <SearchContext.Provider value={searchState}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};