import styled from "styled-components";
import { bars, bg, secundary } from "../../theme/colors";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color:${bars} ;
`;
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;
export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;    
`;
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;
export const MenuItem = styled.li`
    height: 100%;
`;
export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: ${bg};
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;
    &:hover{
        color: ${bg};
        background-color: ${secundary};
        transition: 0.5s all ease;
    }
`;

export const P = styled.p`
    color: ${bg};
    font-family: sans-serif;
    font-weight: bold;
`;
