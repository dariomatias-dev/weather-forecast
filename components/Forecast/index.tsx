import { useData } from "../Context";
import ForecastCard from "../ForecastCard";

const Forecast = () => {
    const { forecast } = useData();

    return (
        <div className="flex flex-col items-center gap-12 mt-8 mx-4 mb-40">
            <h1 className="text-purple-900 text-center text-5xl font-bold">
                {forecast.name}
            </h1>
            <div className="relative w-full max-w-[400px] h-[400px] transition duration-300">
                <ForecastCard />
            </div>
        </div>
    );
};

export default Forecast;
