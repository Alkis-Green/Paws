import React from 'react';
import Icon1 from '../../images/Icon1.png';
import Icon2 from '../../images/Icon2.png';
import Icon3 from '../../images/Icon3.png';

import {
    ServicesContainer, ServicesH1,
    ServicesH2, ServicesWrapper,
    ServicesCard, ServicesIcon,
    ServicesP,
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Dogs Well-Being</ServicesH2>
                    <ServicesP>There are few feelings as satisfying as mastering a skill that matters.
                        After you graduate from our program you still learn each day…
                        your experience and expertise grows with each and every dog you meet.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Make a great living</ServicesH2>
                    <ServicesP>Not all dog trainers are created equal.
                        There is incredible demand and the profit margin in dog training is very favorable.
                        This is just good math.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Be your own boss</ServicesH2>
                    <ServicesP>Let’s face it, self-employment has a lot of perks…
                        none the least of which is bringing your dog to work with you!
                        The life of a dog trainer is one of flexibility and freedom.
                        You, quite literally, make the rules.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;