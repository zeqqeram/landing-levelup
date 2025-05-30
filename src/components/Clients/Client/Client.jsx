import styled from "styled-components";

const StyledClient = styled.div`
min-width: 317px;
max-height: 211px;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.125rem;
background-color: #c1c1c1;
border-radius: .75rem;

p {
    font: ${({theme}) => theme.fonts.body};
}
`

const StyledClientHeader = styled.div`
display: flex;
gap: 1.125rem;

img {
    width: 3.75rem;
    height: 3.75rem;
}
`

const StyledClientHeaderText = styled.div`
display: flex;
flex-direction: column;
gap: .75rem;

h2 {
    font: ${({theme}) => theme.fonts.clientName};
}

h3 {
    font: ${({theme}) => theme.fonts.clientTitle};
}
`

const Client = ({foto, nombre, titulo, comentario}) => {
    return (
        <StyledClient>
                <StyledClientHeader>
                    <img src= {foto} alt="foto del cliente" />
                    <StyledClientHeaderText>
                        <h2>
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