
import { ThreeCircles } from "react-loader-spinner";
import { useData } from "../Context";
import ForecastCard from "../ForecastCard";

export const Forecast = () => {
    const { forecast } = useData();

    return (
        <div className="flex flex-col items-center gap-12 mt-8 mx-4 mb-40">
            {
                JSON.stringify(forecast) === "{}" && (
                    <div className="mt-32">
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#6b21a8"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </div>
                )
            }

            {
                JSON.stringify(forecast) !== "{}" && (
                    <>
                        <h1 className="text-purple-900 text-center text-5xl font-bold">
                            {forecast.name}
                        </h1>
                        <div className="relative w-full max-w-[400px] h-[400px] transition duration-300">
                            <ForecastCard />
                        </div>
                    </>
                )
            }
        </div>
    );
};
