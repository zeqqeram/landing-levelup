import styled from "styled-components"

const StyledFooter = styled.footer`
width: 100%;
height: 115px;
display: flex;
flex-direction: column;
justify-content: center;

img {
    width: 100%;
    height: 115px;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    height: 140px;
    img {
        height: 140px;
        width: auto;
    }
}
`
const StyledFooterContainer = styled.div`
width: 100%;
height: 200px;
background-color: ${({theme}) => theme.colors.secondary};
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5rem;

img { 
    width: 200px;
    height: 42px;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    img {
        height: 64px;
        width: auto;
    }
}
` 

const Footer = () => {
    return (
        <StyledFooter>
            <img src="img/deco.png"/>
            <StyledFooterContainer>
                <img src="img/redes.png"/>
            </StyledFooterContainer>
        </StyledFooter>
    );
};

export default Footer;