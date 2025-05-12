import styled from "styled-components";

const StyledReview = styled.div`
min-width: 216px;
max-height: 324px;
display: flex;
flex-direction: column;
gap: .5rem;

img {
    width: 100%;
    height: 100%;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
min-width: 400px;
max-height: 600px;
}
`

const Review = ({gameImg}) => {
    return (
        <StyledReview>
            <img src={gameImg} alt="portada de un juego" />
        </StyledReview>
    );
};

export default Review;