import styled from "styled-components";

const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;

.label {
    font: ${({theme}) => theme.fonts.callToAction};
}

.input {
    padding: 1rem .5rem;
    font: ${({theme}) => theme.fonts.body};
}
`

const Form = ({text, name}) => {
    return (
        <StyledForm>
            <label className="label">
                {text}
            </label>
            <input
                className="input"
                type="text"
                name={name}
            >
            </input>
        </StyledForm>
    );
};

export default Form;