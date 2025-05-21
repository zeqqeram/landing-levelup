import styled from "styled-components";

const StyledCTA = styled.button`
padding: .9375rem 1.875rem;
font: ${({theme}) => theme.fonts.callToAction};
background-color: ${({$active, theme}) => $active ? theme.colors.accent : theme.colors.accentLight};
color: ${({theme}) => theme.colors.primary};
cursor: pointer;
border: none;

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
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