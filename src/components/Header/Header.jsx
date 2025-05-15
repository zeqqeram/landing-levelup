import styled from "styled-components";
import Logo from "../Logo/Logo";

const HeaderContainer =styled.header `
width: 100%;
height: 4rem;
padding: 1rem 1.25rem;
background-color: ${({theme}) => theme.colors.primary};
display: flex;
justify-content: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo></Logo>
        </HeaderContainer>
    );
};

export default Header;