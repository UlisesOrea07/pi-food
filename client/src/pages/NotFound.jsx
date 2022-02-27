import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    margin: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
`;
const P = styled.p`
    font-size: 50px;
`;
const Num = styled.p`
    font-size: 100px;
`;


const NotFound = () => {
    return (
        <Container>
            <Num>404</Num>
            <P>Page Not Found</P>
            <P>We are sorry</P>
        </Container>
    );
}

export default NotFound;