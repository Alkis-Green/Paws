import React from 'react';
import Icon1 from '../../images/Icon1.jpg';
import Icon2 from '../../images/Icon2.jpg';
import Icon3 from '../../images/Icon3.jpg';

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
                    <ServicesH2>Save time</ServicesH2>
                    <ServicesP>We Help With Everything. We Help With Everything</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Save time</ServicesH2>
                    <ServicesP>We Help With Everything. e Help With Everything.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Save time</ServicesH2>
                    <ServicesP>We Help With Everything e Help With Everything.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;