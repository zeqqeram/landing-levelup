import styled from "styled-components";
import CTA from "../CTA/CTA";

const StyledFormSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 4rem 2rem;
gap: 1rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

p {
    ${({theme}) => theme.fonts.body};
    padding-bottom: 1.5rem;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    h2 {
        font-size: 2.9375rem;
    }  

    p {
        font-size: 1.5rem;
    }
}
`

const FormSection = ({openModal}) => {
    return (
        <StyledFormSection>
            <h2>
                ¿Te lo vas a perder?
            </h2>
            <p>
                No te quedes afuera de esta experiencia que ya muchos están disfrutando. Obtené tu pase y que comience la aventura.
            </p>
            <CTA openModal = {openModal} />
        </StyledFormSection>
    );
};

export default FormSection;