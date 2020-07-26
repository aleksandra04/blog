import Link from 'next/link';
import { Nav, Header, GlobalStyle, NavLink, Main } from '../styles/styledLayout';

function Layout({ children }): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Nav>
                <Header>Test task blog</Header>
                <Link href="/">
                    <NavLink white>Home</NavLink>
                </Link>
            </Nav>
            <Main>{children}</Main>
        </>
    );
}
export default Layout;
