import styled from "styled-components";
import Client from "./Client/Client";

const StyledClients = styled.section`
display: flex;
flex-direction: column;
padding:  1.5rem 1.5rem 0;
gap: 1.3125rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    padding: 4.5rem 4.0625rem;
    gap: 3.1875rem;

    h2 {
        font-size: 2.9375rem;
    }  
}
`

const StyledClientList = styled.div`
display: flex;
gap: 1.125rem;
overflow-x: auto;

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
gap: 1.5625rem;
overflow: hidden;
}
`

const Clients = () => {
    return (
        <StyledClients>
            <h2>
                ¿Qué opinan nuestros usuarios?
            </h2>
            <StyledClientList>
                <Client 
                    foto = "img/client1.png"
                    nombre = "Santi"
                    titulo = "God"
                    comentario = "Está re piola este beneficio ya me jugué 3 juegos muy buenos gracias a él y ya quiero ver cuales serán los siguientes 🔥"
                />
                              <Client 
                    foto = "img/client2.png"
                    nombre = "Lucía"
                    titulo = "Encantada"
                    comentario = "Gracias a estos descuentos ya me pude comprar dos juegos que me encantaron. No se me habría ocurrido comprarlos a su precio normal así que me vino bárbaro este beneficio."
                />
                <Client 
                    foto = "img/client3.png"
                    nombre = "Tomi"
                    titulo = "Tremendo"
                    comentario = "Descubrí esta propuesta el mes pasado y con un amigo nos pudimos comprar el Split Fiction que nos encantó. Estamos ansiosos por ver cuál será el próximo descuento :)"
                />
            </StyledClientList>
        </StyledClients>
    );
};

export default Clients;