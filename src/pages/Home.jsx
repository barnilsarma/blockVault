import Navbar from "../components/Navbar";
import Blockchain_adv from "../components/Blockchain_adv";
import About from "../components/About";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
const Home = () => {
    return (
        <div className='flex flex-col' style={{ rowGap: '5rem' }}>
            <Navbar />
            <Hero />
            <Discover />
            <About />
            <Blockchain_adv />
        </div>
    );
}
export default Home;