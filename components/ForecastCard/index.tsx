import Image from "next/image";
import { WiHumidity } from "react-icons/wi";
import { BsClouds, BsWind } from "react-icons/bs";

import { useData } from "../Context";

const ForecastCard = () => {
    const { forecast } = useData();

    return (
        <div className="absolute top-0 hover:-translate-y-3 left-0 flex flex-col items-center w-full bg-zinc-300 bg-gradient-to-tl hover:from-blue-950 rounded-2xl p-5 group transition ease-in-out duration-300">
            <Image
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                width={256}
                height={75}
                priority
                alt="Weather icon"
                className="w-full max-w-[256px] h-auto"
            />
            <div>
                <div className="bg-purple-800 text-white font-bold uppercase px-4 py-2 rounded-3xl">
                    <p>{forecast.weather[0].description}</p>
                </div>
            </div>
            <div className="flex items-end gap-4 mt-2">
                <div>
                    <p className="text-purple-800 group-hover:text-white text-4xl xs:text-6xl font-bold xs:font-semibold">
                        {forecast.main.temp_min}°
                    </p>
                </div>
                <div>
                    <p className="text-purple-600 group-hover:text-purple-300 text-2xl xs:text-4xl font-bold xs:font-semibold">
                        {forecast.main.temp_min}°
                    </p>
                </div>
            </div>
            <div className="flex gap-8 group-hover:text-white mt-4">
                <div className="flex items-center">
                    <WiHumidity className="w-7 h-7 text-purple-700 group-hover:text-white" />
                    <span className="text-xl">{forecast.main.humidity}</span>
                </div>
                <div className="flex items-center gap-2">
                    <BsWind className="w-7 h-7 text-purple-700 group-hover:text-white" />
                    <span>{forecast.wind.speed}km/h</span>
                </div>
            </div>
            <div className="flex items-center gap-2 group-hover:text-white mt-2">
                <BsClouds className="w-7 h-7 text-purple-700 group-hover:text-white" />
                {forecast.clouds.all}%
            </div>
        </div>
    );
};

export default ForecastCard;
