import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner/Banner'
import Description from '../Description/Description';
import Footer from '../Footer/Footer';
import Presentation from '../Presentation/Presentation';
// Styles

const Wrappper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: inherit;
    margin: 0;   
    padding: 0;
`;

const LandingLayout = () => {
    return (
        <Wrappper>
            <Banner />
            <Description />
            <Presentation />
            <Footer />
        </Wrappper>
    );
}

export default LandingLayout;


