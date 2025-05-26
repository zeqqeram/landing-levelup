import styled from "styled-components";

const StyledClient = styled.div`
min-width: 317px;
max-height: 211px;
padding: 1.375rem 1.375rem 1.75rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: .6875rem;
background-color: ${({theme}) => theme.colors.primary};
border-radius: .3125rem;
color: ${({theme}) => theme.colors.secondary};

p {
    font: ${({theme}) => theme.fonts.body};
}

h2 {
    padding: 0;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    min-width: 420px;
    max-height: 280px;
    gap: 1.5rem;
    padding: 1.75rem;

    p{
        font-size: 1.125rem;
    }

    h2 {
        padding: 0;
    }
}
`

const StyledClientHeader = styled.div`
display: flex;
gap: 1.125rem;

img {
    width: 3.75rem;
    height: 3.75rem;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    gap: 1.5rem;
img {
    width: 5rem;
    height: 5rem;
}
}
`

const StyledClientHeaderText = styled.div`
display: flex;
flex-direction: column;
gap: .6875rem;

.nombreUser {
    font: ${({theme}) => theme.fonts.clientName};
        padding: 0;

}

h3 {
    font: ${({theme}) => theme.fonts.clientTitle};
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    gap: 0.875rem;

.nombreUser {
    font-size: 1.5625rem;
    padding: 0;

}

h3 {
    font-size: 1.25rem; 
}
}
`

const Client = ({foto, nombre, titulo, comentario}) => {
    return (
        <StyledClient>
                <StyledClientHeader>
                    <img src= {foto} alt="foto del cliente" />
                    <StyledClientHeaderText>
                        <h2 className="nombreUser">
                            {nombre}
                        </h2>
                        <h3>
                            {titulo}
                        </h3>
                    </StyledClientHeaderText>
                </StyledClientHeader>
                <p>
                    {comentario}
                </p>
        </StyledClient>
    );
};

export default Client;