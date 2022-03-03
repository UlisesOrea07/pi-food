import React from "react";
import styled from "styled-components";
import { bars } from "../../theme/colors";
const Container = styled.div`
    border: 10px solid rgba(0,0,0,.1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left-color: ${bars};
    animation: spin 1s ease-out infinite;
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;
const Loading = () => {
    return (
        <Container>
        </Container>

    );
}

export default Loading;