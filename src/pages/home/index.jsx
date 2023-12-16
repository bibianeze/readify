import Email from "../../components/email section/Email";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar";
import FeaturedSection from "../../layout/FeaturedSection";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <FeaturedSection />
            <Email/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;
