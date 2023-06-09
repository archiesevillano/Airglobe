import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Contents from './contents';

export const AppContent = React.createContext();

const SharedContent = ({ children }) => {

    const [contents, setContents] = useState([]) //initial value is empty
    const [appData, setAppData] = useState([]);

    useEffect(() => {
        loadData();
        getAppData();
    }, []);

    const loadData = () => {
        try {
            const data = Contents;
            console.log(data);
            setContents(data?.contents); //invoke the function for getting the content values
        } catch (error) {
            console.warn(error);
        }
    }

    const getAppData = async () => {
        try {
            const response = await Axios.get("manifest.json"); //fetch the app contents
            const data = await response;
            setAppData(data?.data); //invoke the function for getting the content values
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <AppContent.Provider value={
            {
                contents,
                setContents,
                appData,
            }
        }>
            {children}
        </AppContent.Provider>
    );
}

export default SharedContent;