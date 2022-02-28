import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner'
import Description from '..//components/Description/Description';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Presentation/Presentation';
import { letter, bars, secundary, bg } from "../theme/colors";
// Styles

const Wrappper = styled.div`
    display: flex;
    background-color: ${bg};
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%;
    margin: 0;   
    padding: 0;
`;

const Principal = () => {
    return (
        <Wrappper>
            <Banner />
            <Description />
            <Presentation />
            <Footer />
        </Wrappper>
    );
}

export default Principal;

