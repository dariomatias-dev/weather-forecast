import { useState, useEffect, useContext, createContext } from "react";

import api from "./../../services/api";

import { Forecast } from "@/@types/Forecast";

type DataContextProps = {
    forecast: Forecast;
    searchForecast: (query: string) => void;
    errorMessage: string;
    showErrorMessage: (message: string) => void;
};

const DataContext = createContext({} as DataContextProps);

type DataProviderProps = {
    children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
    const [forecast, setForecast] = useState({} as Forecast);
    const [errorMessage, setErrorMsg] = useState("");

    const searchForecast = (query: string) => {
        const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=pt_br`;
        api.get(searchUrl)
            .then((response) => {
                setForecast(response.data);
            })
            .catch((err) => {
                setErrorMsg("Cidade não encontrada.");
                console.log(err);
            });
    };

    const showErrorMessage = (message: string) => {
        setErrorMsg(message);
    };

    useEffect(() => {
        const initialForecast = "Areial";
        searchForecast(initialForecast);
    }, []);

    if (JSON.stringify(forecast) === "{}") return;

    return (
        <DataContext.Provider
            value={{ forecast, searchForecast, errorMessage, showErrorMessage }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    return context;
};
