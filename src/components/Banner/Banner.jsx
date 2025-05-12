import styled from "styled-components";
import BannerContent from "./BannerContent/BannerContent";

const StyledBanner = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(img/banner.png);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: relative;

&::before {
content: " ";
position: absolute;
background: rgba(28, 28, 28, .75);
top: 0;
bottom: 0;
right: 0;
left: 0;

z-index: 1;
}
@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    padding: 7.81255rem;
}
`

const Banner = ({openModal}) => {
    return (
        <StyledBanner>
            <BannerContent openModal = {openModal} />
        </StyledBanner>
    );
};

export default Banner;