import React from "react";

const Container = styled.div`
    position: relative;
    display: block;
    background-color: #d30606ac;
    border:none;
    border-radius: 10px;
`;
const P = styled.p`
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
`;
const ERROR = () => {
    return (
        <Container>
            <h3>ERROR</h3>
            <P>WE ARE SORRY</P>
        </Container>
    );
}


export default ERROR;