import styled from "styled-components";
import CTA from "../CTA/CTA";

const StyledFormSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 3.8125rem 1.5rem 1.75rem;
gap: .875rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

p {
    font: ${({theme}) => theme.fonts.body};
    padding-bottom: .5rem;
    line-height: 180% ;
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {

    padding: 106px 369px 70px;
    gap: 39px;

    h2 {
        font-size: 2.9375rem;
    }  

    p {
        font-size: 1.5rem;
        padding-bottom: 13px;
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
            <CTA onClick = {openModal} active/>
        </StyledFormSection>
    );
};

export default FormSection;