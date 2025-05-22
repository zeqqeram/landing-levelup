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

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    height: 5.1875rem;
    padding: 0 1.5rem;
}
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
    );
};

export default Header;