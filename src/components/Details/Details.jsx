import styled from "styled-components";

const StyledDetails = styled.section`
display: flex;
flex-direction: column;
padding:  1.5rem;
gap: 1.625rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

p {
    font: ${({theme}) => theme.fonts.body};
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
padding: 4.5rem 1.5rem;
h2 {
    font-size: 2.9375;
}

p {
    font-size: 1.5rem;
}
}
`

const Details = () => {
    return (
        <StyledDetails>
            <h2>
                ¿Qué ofrecemos?
            </h2>
            <p>
                El juego que estuvo en boca de tantos este mes, el más aclamado, el que llegó a los corazones de muchos gamers ahora puede ser tuyo, gracias a nuestro pase/descuento exclusivo. Sumergite en en esta maravillosa experiencia y disfrutá de este beneficio que Level Up preparó exclusivamente para vos. ¡Tu próxima aventura te espera!
            </p>
        </StyledDetails>
    );
};

export default Details;