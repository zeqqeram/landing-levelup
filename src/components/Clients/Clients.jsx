import styled from "styled-components";
import Client from "./Client/Client";

const StyledClients = styled.section`
display: flex;
flex-direction: column;
padding:  1.5rem 0 1.5rem 1.5rem;
gap: 1.125rem;

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

const StyledClientList = styled.div`
display: flex;
gap: 1.125rem;
overflow-x: auto;

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
gap: 1.6875rem;
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
                    nombre = "Mateo"
                    titulo = "titulo de opinión"
                    comentario = "está re piola este beneficio ya me jugué 3 juegos muy buenos gracias a él no me arrepiento de nada suscribanse!!1!1!"
                />
                              <Client 
                    foto = "img/client2.png"
                    nombre = "Jesica"
                    titulo = "titulo de opinión"
                    comentario = "está re piola este beneficio ya me jugué 3 juegos muy buenos gracias a él no me arrepiento de nada suscribanse!!1!1!"
                />
                <Client 
                    foto = "img/client1.png"
                    nombre = "Mateo"
                    titulo = "titulo de opinión"
                    comentario = "está re piola este beneficio ya me jugué 3 juegos muy buenos gracias a él no me arrepiento de nada suscribanse!!1!1!"
                />
            </StyledClientList>
        </StyledClients>
    );
};

export default Clients;