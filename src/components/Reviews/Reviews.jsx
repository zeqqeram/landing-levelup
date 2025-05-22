import styled from "styled-components";
import Review from "./Review/Review";

const StyledReviews = styled.section`
display: flex;
flex-direction: column;
padding:  2.25rem 1.5rem 0;
gap: 1rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    padding: 4.0625rem;

    h2 {
        font-size: 2.9375rem;
    }  
}
`
const StyleReviewsList = styled.div`
display: flex;
gap: 1.5rem;
overflow-x: auto;
overflow-y: hidden;
height: 350.5px;

@media (min-width: 1024px) {
    gap: 3.75rem;
}
`

const Reviews = () => {
    return (
        <StyledReviews>
            <h2>
                Últimos juegos regalados
            </h2>
            <StyleReviewsList>
                <Review gameImg = "img/game1.png" descuento = "30%"/>
                <Review gameImg = "img/game2.png" descuento = "25%"/>
                <Review gameImg = "img/game3.png" descuento = "35%"/>
            </StyleReviewsList>
        </StyledReviews>
    );
};

export default Reviews;