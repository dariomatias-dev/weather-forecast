import { useState, KeyboardEvent } from "react";

import { useData } from "../Context";

const Search = () => {
    const [query, setQuery] = useState("");

    const { searchForecast, errorMessage, showErrorMessage } = useData();

    const verifyQuery = () => {
        if (query.trim().length === 0) {
            showErrorMessage("Insira algum nome.");
            return false;
        } else if (query.length < 3) {
            showErrorMessage(
                "O nome da cidade precisa ter mais que 3 caracteres."
            );
            return false;
        } else {
            showErrorMessage("");
            return true;
        }
    };

    const search = () => {
        const validQuery = verifyQuery();
        if (validQuery) {
            setQuery("");
            searchForecast(query);
        }
    };

    const checkKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") search();
    };

    return (
        <div className="flex justify-center items-center bg-gray-900 text-white py-10">
            <div className="w-full flex flex-col gap-6 text-center mx-4">
                <h2 className="text-3xl font-bold">
                    Digite o nome de uma cidade
                </h2>
                <p>Saiba a previsão do tempo para a sua cidade</p>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col xs:flex-row justify-center items-center gap-4">
                        <input
                            type="text"
                            placeholder="Ex.: Areial"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={(e) => checkKeyPressed(e)}
                            className="w-full max-w-[500px] h-[55px] bg-white text-black border-2 border-purple-700 hover:border-purple-900 focus:border-purple-900 rounded-xl pl-2 outline-none"
                        />

                        <button
                            onClick={search}
                            className="w-full max-w-[160px] bg-purple-600 hover:bg-purple-800 font-bold rounded-xl px-10 py-3 transition duration-300"
                        >
                            Pesquisar
                        </button>
                    </div>

                    <span className="text-red-500">{errorMessage}</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
