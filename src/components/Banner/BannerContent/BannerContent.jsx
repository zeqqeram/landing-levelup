import styled from "styled-components";
import CTA from "../../CTA/CTA";

const StyledBannerContent = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4.4375rem 1.5625rem;
gap: 1rem;
color: ${({theme}) => theme.colors.primary};
text-align: center;
z-index: 2;

h1 {
    font: ${({theme}) => theme.fonts.title};
}

h2 {
    font: ${({theme}) => theme.fonts.subtitle};
    padding: 0 2.375rem 1rem 2.375rem;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    padding: 0 11.9375rem;
    gap: 1.125rem;

    h1 {
        font-size: 5.625rem;
        padding: 0 7rem;
    }

    h2 {
        font-size: 2.1875rem;
        padding: 0 0 1.4375rem;
    }
}
`

const BannerContent = ({openModal}) => {
    return (
        <StyledBannerContent>
            <h1>
                ¡Disfrutá del mejor juego del mes!
            </h1>
            <h2>
                Llevate un cupón de descuento para experimentar el juego más aclamado entre nuestras reviews. 
            </h2>
            <CTA onClick = {openModal} active/>
        </StyledBannerContent>
    );
};

export default BannerContent;