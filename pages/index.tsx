import Footer from "@/components/Footer";
import { Forecast } from "@/components/Forecast";
import Header from "@/components/Header";
import Search from "@/components/Search";

const Home = () => {
    return (
        <>
            <Header />
            <Search />
            <Forecast />
            <Footer />
        </>
    );
};

export default Home;
