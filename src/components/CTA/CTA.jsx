import styled from "styled-components";

const StyledCTA = styled.button`
min-height: 70px;
max-width: 196px;
padding: .9375rem;
font: ${({theme}) => theme.fonts.callToAction};
background-color: ${({$active, theme}) => $active ? theme.colors.accent : theme.colors.accentLight};
color: ${({theme}) => theme.colors.primary};
cursor: pointer;
border: none;

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    min-height: 114px;
    max-width: 318px;
    padding: 33px 20px;
    font-size: 2.8125rem;
}
`

const CTA = ({onClick, active}) => {
    return (
        <StyledCTA onClick = {onClick} $active = {active}>
            Conseguir ahora
        </StyledCTA>
    );
};

export default CTA;