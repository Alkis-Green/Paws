import React, { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/HeroSection/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import Navbar from '../Components/Navbar/Navbar';
import Services from '../Components/Services/Services';
import Sidebar from '../Components/Sidebar/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={ toggle } />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </div>
    );
};

export default Home;