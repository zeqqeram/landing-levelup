import styled from "styled-components";

const StyledReview = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
position: relative;

img {
    width: 216px;
    height: 324px;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
min-width: 400px;
max-height: 600px;
}
`

const StyleReviewOff = styled.div`
width: 100%;
height: 53px;
background: linear-gradient(
    to top,
    ${({theme}) => theme.colors.secondary},
    ${({theme}) => theme.colors.secondaryLight}
    );
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: -26.5px;

font: ${({theme}) => theme.fonts.callToAction};

p {
    color: ${({theme}) => theme.colors.primary}; 
}

span {
    color: ${({theme}) => theme.colors.accent};
}

`

const Review = ({gameImg, descuento}) => {
    return (
        <StyledReview>
            <img src={gameImg} alt="portada de un juego" />
            <StyleReviewOff>
                <p>
                    {descuento}
                    <span>
                        OFF
                    </span>
                </p>
            </StyleReviewOff>
        </StyledReview>
    );
};

export default Review;