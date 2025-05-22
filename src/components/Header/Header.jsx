import styled from "styled-components";
import Logo from "../Logo/Logo";

const HeaderContainer =styled.header `
width: 100%;
height: 4rem;
padding: .9375rem 1.5rem;
background-color: ${({theme}) => theme.colors.blackHeader};
display: flex;
justify-content: flex-start;
align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
    );
};

export default Header;