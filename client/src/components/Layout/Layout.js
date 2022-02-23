import React from 'react';
import styled from 'styled-components';

// Styles

const Wrappper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin: 14px;   
`;

const Layout = ({ children }) => {
    return (
        <Wrappper>
            {children}
        </Wrappper>
    );
}

export default Layout;


