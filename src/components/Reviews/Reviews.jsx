import styled from "styled-components";
import Review from "./Review/Review";

const StyledReviews = styled.section`
display: flex;
flex-direction: column;
padding:  1.5rem 0 1.5rem 1.5rem;
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
gap: .75rem;
overflow-x: auto;

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
                <Review gameImg = "img/game3.png"/>
            </StyleReviewsList>
        </StyledReviews>
    );
};

export default Reviews;