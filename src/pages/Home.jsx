import Navbar from "../components/Navbar";
import Blockchain_adv from "../components/Blockchain_adv";
import About from "../components/About";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <div className='flex flex-col' style={{ rowGap: '5rem' }}>
            <Navbar />
            <Hero />
            <Discover />
            <About />
            <Blockchain_adv />
            <Footer />
        </div>
    );
}
export default Home;