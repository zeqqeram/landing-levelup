import styled from "styled-components";
import Form from "./Form/Form";
import CTA from "../CTA/CTA";
import { useState } from "react";


const StyledModal = styled.div`
width: 100%;
height: 100%;
display: ${({$showModal}) => ($showModal ? "flex" : "none")};
position: fixed;
top: 0;
left: 0;
flex-direction: column;
background-color: rgba(28, 28, 28, .75);
justify-content: center;
align-items: center;
gap: 2rem;
z-index: 1000;
overflow-y: auto;
overflow-x: hidden;
padding: 1.5625rem;
`

const StyledModalContent = styled.div`
position: relative;
width: 100%;
height: auto;
background-color: #c1c1c1;
border-radius: .625rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;
padding: 3rem;

h2 {
    font: ${({theme}) => theme.fonts.sectionTitle};
}

p {
    font: ${({theme}) => theme.fonts.body};
}

span {
    color: ${({theme}) => theme.colors.accent};
}
`

const StyledCloseModal = styled.button`
    display: none;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        position: absolute;
        top: .5rem;
        right: .75rem;
        background: none;
        border: none;
        cursor: pointer;
        p {
            font: ${({theme}) => theme.fonts.callToAction};
        }
    }
`

const Modal = ({showModal, closeModal}) => {
    
    const [formData, setFormData] = useState({
        nombre: "",
        mail: "",
        mensaje: ""
    });

    const [isValidName, setIsValidName] = useState (false);
    const [isValidMail, setIsValidMail] = useState (false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, [name]: value,
        }));
        if (name === "mail") {
            setIsValidMail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()));
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted (true);
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        if (name === "nombre") {
            setIsValidName(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value.trim()));
        }  
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal(true);
        }
    };

    const formValid = isValidName && isValidMail; 

    return (
        <StyledModal $showModal = {showModal} onClick = {handleOverlayClick}>
                <StyledModalContent>
                <StyledCloseModal onClick={closeModal}>
                <p> x </p>
                </StyledCloseModal>
                { formValid && isSubmitted ? (
                    <>
                    <h2>
                        ¡Muchas gracias, <span>{formData.nombre}</span>!
                    </h2>
                    <p>
                        Revisá tu mail <span>{formData.mail}</span> para encontrar tu primer código de descuento y prestá atención a tu casilla durante los siguientes meses ;)
                    </p>
                    </>

                ) : (
                    <>
                <Form 
                    text = "¿Cómo te llamas?" 
                    name = "nombre"
                    type = "text"
                    value = {formData.nombre}
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                />
                <Form 
                    text = "Dejanos tu mail"
                    name = "mail"
                    type = "email"
                    value = {formData.mail}
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                />
                <CTA
                    onClick = {handleSubmit}
                    active = {formValid}
                />
                </>
                )
            }
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;