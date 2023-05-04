import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Header = () => {
    return (
        <div className="flex justify-between items-center h-12 bg-white">
            <h1 className="text-purple-800 text-base mini-xs:text-xl xs:text-2xl font-bold ml-4 xs:ml-10 sm:ml-20">
                Previsão do tempo
            </h1>
            <div className="flex gap-1 mini-xs:gap-2 xs:gap-4 mr-1 mini-xs:mr-4">
                <Link
                    href="https://www.instagram.com/dariomatias_dev/"
                    legacyBehavior
                >
                    <a className="flex justify-center items-center w-8 h-8 bg-zinc-100 hover:bg-zinc-200 rounded-full hover:scale-110 transition duration-300">
                        <BsInstagram className="w-5 h-5" />
                    </a>
                </Link>

                <Link href="https://github.com/dariomatias-dev/" legacyBehavior>
                    <a className="flex justify-center items-center w-8 h-8 bg-zinc-100 hover:bg-zinc-200 rounded-full hover:scale-110 transition duration-300">
                        <BsGithub className="w-5 h-5" />
                    </a>
                </Link>

                <Link href="https://twitter.com/matiasdario752/" legacyBehavior>
                    <a className="flex justify-center items-center w-8 h-8 bg-zinc-100 hover:bg-zinc-200 rounded-full hover:scale-110 transition duration-300">
                        <BsTwitter className="w-5 h-5" />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Header;
