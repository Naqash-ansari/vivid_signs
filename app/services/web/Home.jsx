import Clients from "./components/Clients";
import Cta from "./components/Cta";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";



const Home = () => {
    return (
        <>
            {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
            <Hero />
            <Intro />
            <Services />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            {/* <Cta /> */}
            {/* <Footer /> */}
        </>

    )
}

export default Home;

