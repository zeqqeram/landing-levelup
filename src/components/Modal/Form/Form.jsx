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
    border: 1px solid #c1c1c1;
}

.input:focus{
    border: 2px solid ${({theme}) => theme.colors.secondary};
}

.input:invalid {
border-color: red;
}

`

const Form = ({text, name, type, value, onChange, onBlur}) => {
    return (
        <StyledForm>
            <label className="label">
                {text}
            </label>
            <input
                className="input"
                type = {type}
                name = {name}
                value = {value}
                onChange = {onChange}
                onBlur = {onBlur}
            >
            </input>
        </StyledForm>
    );
};

export default Form;