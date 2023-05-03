import { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState('');
    const [errorMessage, setErrorMsg] = useState('');

    const verifyQuery = () => {
        if (query.trim().length === 0) {
            setErrorMsg('Insira algum nome.');
            return false;
        } else if (query.length < 3) {
            setErrorMsg('O nome da cidade precisa ter mais que 3 caracteres.');
            return false;
        } else {
            setErrorMsg('');
            return true;
        }
    };

    const search = () => {
        const validQuery = verifyQuery();
        if (validQuery) {

        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-900 text-white py-10">
            <div className="flex flex-col justify-center gap-6 text-center">
                <h2 className="text-3xl font-bold">
                    Digite o nome de uma cidade
                </h2>
                <p>Saiba a previsão do tempo para a sua cidade</p>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Ex.: Areial"
                            onChange={e => setQuery(e.target.value)}
                            className="w-[500px] h-[55px] bg-white text-black border-2 border-purple-700 hover:border-purple-900 focus:border-purple-900 rounded-xl pl-2 outline-none"
                        />

                        <button onClick={search} className="bg-purple-600 hover:bg-purple-700 font-bold rounded-xl px-10 py-3 transition duration-300">
                            Pesquisar
                        </button>
                    </div>

                    <span className="text-red-500">
                        {errorMessage}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Search;
