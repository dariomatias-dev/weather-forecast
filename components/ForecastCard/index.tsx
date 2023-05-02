import Image from "next/image";
import { WiHumidity } from "react-icons/wi";
import { BsClouds, BsWind } from "react-icons/bs";

const ForecastCard = () => {
    return (
        <div className="absolute top-0 hover:-translate-y-3 left-0 flex flex-col items-center w-[400px] bg-purple-100 bg-gradient-to-tl hover:from-blue-950 rounded-2xl p-5 group transition ease-in-out duration-300">
            <Image
                src="https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud.50287a67.png&w=256&q=75"
                width={500}
                height={500}
                alt=""
                className="w-full max-w-[250px]"
            />
            <div>
                <div className="bg-purple-800 text-white font-bold uppercase px-4 py-2 rounded-3xl">
                    <p>Nublado</p>
                </div>
            </div>
            <div className="flex items-end gap-4 mt-2">
                <div>
                    <p className="text-purple-800 group-hover:text-white text-6xl font-semibold">
                        22°
                    </p>
                </div>
                <div>
                    <p className="text-purple-600 group-hover:text-purple-300 text-4xl font-semibold">
                        28°
                    </p>
                </div>
            </div>
            <div className="flex gap-8 group-hover:text-white mt-4">
                <div className="flex items-center">
                    <WiHumidity className="w-7 h-7 text-purple-700 group-hover:text-white" />
                    <span className="text-xl">75%</span>
                </div>
                <div className="flex items-center gap-2">
                    <BsWind className="w-7 h-7 text-purple-700 group-hover:text-white" />
                    <span>32km/h</span>
                </div>
            </div>
            <div className="flex items-center gap-2 group-hover:text-white mt-2">
                <BsClouds className="w-7 h-7 text-purple-700 group-hover:text-white" />
                95%
            </div>
        </div>
    );
};

export default ForecastCard;
