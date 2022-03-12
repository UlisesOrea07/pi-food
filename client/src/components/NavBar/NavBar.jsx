import React from "react";
import recipeBook from '../../images/recipeBook.png';
import { P, Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBar.elements";

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={recipeBook} width='8%' />
                    <P>Food, recipes & coocking</P>
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink href="/home" onclick="event.preventDefault()">
                            Home
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/add" onclick="event.preventDefault()">
                            Add Recipe
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>

    );
}


export default NavBar;