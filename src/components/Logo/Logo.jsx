import styled from "styled-components";

const LogoStyled = styled.div`
width: auto;
height: 2.125rem;

img{
    width: 100%;
    height: 100%;
}

@media (max-width: 768px) {
}

@media (max-width: 1024px) {
}
`;

const Logo = () => {
    return (
        <LogoStyled>
            <img src="img/logo.png" alt="Logo de LevelUp"/>
        </LogoStyled>
    );
};

export default Logo;