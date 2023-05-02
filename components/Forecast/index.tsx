import ForecastCard from "../ForecastCard";

const Forecast = () => {
    return (
        <div className="flex flex-col items-center gap-12 mt-8 mb-32">
            <h1 className="text-purple-900 text-center text-5xl font-bold">
                Areial
            </h1>
            <div className="relative w-[400px] h-[400px] transition duration-300">
                <ForecastCard />
            </div>
        </div>
    );
};

export default Forecast;
