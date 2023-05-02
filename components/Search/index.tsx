const Search = () => {
    return (
        <div className="flex justify-center items-center bg-gray-900 text-white py-10">
            <div className="flex flex-col justify-center gap-6 text-center">
                <h2 className="text-3xl font-bold">
                    Digite o nome de uma cidade
                </h2>
                <p>Saiba a previsão do tempo para a sua cidade</p>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Ex.: Areial"
                        className="w-[500px] h-[55px] bg-white text-black border-2 border-purple-700 hover:border-purple-900 focus:border-purple-900 rounded-xl pl-2 outline-none"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 font-bold rounded-xl px-10 py-3 transition duration-300">
                        Pesquisar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
