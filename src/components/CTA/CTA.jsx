import styled from "styled-components";

const StyledCTA = styled.button`
padding: .9375rem;
font: ${({theme}) => theme.fonts.callToAction};
background-color: ${({theme}) => theme.colors.accent};
color: ${({theme}) => theme.colors.primary};
cursor: pointer;
border: none;

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    font-size: 2.8125rem;
}
`

const CTA = ({onClick}) => {
    return (
        <StyledCTA onClick = {onClick}>
            Conseguir ahora
        </StyledCTA>
    );
};

export default CTA;