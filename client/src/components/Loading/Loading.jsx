import React from "react";
import styled from "styled-components";
import spin from "../../images/loading-gif.gif";
const Container = styled.div`
    margin-top: 10%;    
    text-align: center;
    align-items: center;
    justify-content: center;
`;
const Loading = () => {
    return (
        <Container>
            <img src={spin} width='10%' alt="loading..." />
        </Container>

    );
}

export default Loading;