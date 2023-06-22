import About from "../components/About";
import Amenities from "../components/Amenities";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Specials from "../components/Specials";
import Location from "../components/Location";
import Lost from "../components/Lost";
import Connect from "../components/Connect";


export default function Home(){
    return(
        <main>
            <Hero />
            <About />
            <Specials />
            <Rooms />
            <Amenities />
            <FAQ />
            <Location />
            <Lost />
            <Connect />

        </main>
    )
}