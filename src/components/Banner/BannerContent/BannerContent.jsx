import styled from "styled-components";
import CTA from "../../CTA/CTA";

const StyledBannerContent = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4.5rem 1.5rem;
gap: 1rem;
color: ${({theme}) => theme.colors.primary};
text-align: center;
z-index: 2;

h1 {
    font: ${({theme}) => theme.fonts.title};
}

h2 {
    font: ${({theme}) => theme.fonts.subtitle};
    padding-bottom: 2rem;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    h1 {
        font-size: 5.625rem;
    }

    h2 {
        font-size: 2.1875rem;
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