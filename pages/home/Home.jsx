import About from "./sections/About";

import Amenities from "./sections/Amenities";
import FAQ from "./sections/FAQ";

import Hero from "./sections/Hero";

import Rooms from "./sections/Rooms";
import Specials from "./sections/Specials";
import Location from "./sections/Location";
import Lost from "./sections/Lost";
import Connect from "./sections/Connect";


export default function Home(){
    return(
        <main>
            <Hero />
            <About />
            {/* <Specials /> */}
            {/* <Rooms /> */}
            <Amenities />
            <FAQ />
            <Location />
            <Lost />
            <Connect />

        </main>
    )
}