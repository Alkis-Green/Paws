import React, { useState } from 'react';
import Image from '../../images/HeroImg.jpg';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Image} type="HeroImg/jpg" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Something About Dogs</HeroH1>
                <HeroP>More stuff about dogs and animals</HeroP>
                <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Dogie Stuff
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;