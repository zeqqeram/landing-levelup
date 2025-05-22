import styled from "styled-components";

const StyledBullet = styled.div`
max-height: 90px;
max-width: 328px;
display: flex;
align-items: center;
gap: .875rem;
background: ${({theme}) => theme.colors.darkContrast};
padding: .875rem;
color: ${({theme}) => theme.colors.primary};

img {
    width: 2rem;
    height: auto;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
max-width: 400px;
max-height: 110px;
padding: 1.375rem;
gap: 1rem;

img {
    width: 2.5rem;
    height: auto;
}
}

`
const StyledBulletText = styled.div`
display: flex;
flex-direction: column;

h2 {
    font: ${({theme}) => theme.fonts.bulletTitle};
}

p {
    font: ${({theme}) => theme.fonts.bulletText};
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {

h2 {
font-size: 1.25rem;
}

p {
font-size: 1.25rem;
}

}
`

const Bullet = ({titular, text, icon}) => {
    return (
        <StyledBullet>
            <img src= {icon} alt="Icono de bullet" />
            <StyledBulletText>
                <h2>
                    {titular}
                </h2>
                <p>
                    {text}
                </p>
            </StyledBulletText>
        </StyledBullet>
    );
};

export default Bullet;