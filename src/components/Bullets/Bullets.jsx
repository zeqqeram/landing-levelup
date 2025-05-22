import styled from "styled-components";
import Bullet from "./Bullet/Bullet";

const StyledBullets = styled.section`
display: flex;
flex-direction: column;
padding: 2rem 3.5rem 2.3125rem;
gap: 1.625rem;
background-color: ${({theme}) => theme.colors.secondary};

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4.9375rem 4.0625rem 4.75rem;
    justify-content: center;
    gap: 3.4375rem;
}
`

const Bullets = () => {
    return (
        <StyledBullets>
            <Bullet titular="Entrega mensual" text="Recibí en tu mail el juego destacado del mes" icon = "img/icon_mail.png"/>
            <Bullet titular="Calidad garantizada" text="Elegimos lo mejor en historia, gameplay y arte" icon = "img/icon_turns.png"/>
            <Bullet titular="Sin vueltas" text="Registrate una vez y recibí beneficios mensuales" icon = "img/icon_reviews.png"/>
            <Bullet titular="Siempre algo nuevo" text="Sumá un nuevo título a tu colección cada mes" icon = "img/icon_quality.png"/>
            <Bullet titular="Reseñas reales" text="Selección editorial, sin publicidad disfrazada" icon = "img/icon_game.png"/>
        </StyledBullets>
    );
};

export default Bullets;