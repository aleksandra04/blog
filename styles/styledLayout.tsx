import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    font-family: Arial, Sans-Serif;
  };
`;

export const Nav = styled.nav`
    && {
        font-family: Arial, Sans-Serif;
        background-color: black;
        margin: 0px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        position: sticky;
        top: 0;
        left: 0;
        border: 1px solid black;
    }
`;

export const Main = styled.main`
    && {
        // width: 100%
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }
`;
export const Header = styled.div`
    && {
        color: white;
        font-size: 24px;
        text-transform: uppercase;
    }
`;

export const NavLink = styled.a`
    && {
        color: ${({ white }) => (white ? 'white' : 'black')};
        margin-top: 10px;
        font-size: 18px;
        cursor: pointer;
        transition: 0.4s;

        &:hover {
            text-decoration: underline;
        }
    }
`;
