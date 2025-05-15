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
height: 100%;
background-color: #fff;
border-radius: .625rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;
padding: 1.5rem;

p {
    font: ${({theme}) => theme.fonts.sectionTitle};
}
`

const StyledCloseModal = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
`

const Modal = ({showModal, closeModal}) => {
    
    const [formData, setFormData] = useState({
        nombre: "",
        mail: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => {
            const update = {
                ...prev, [name]: value,
            };
            console.log (update);
            return update;
        });
        };

        const [isSubmitted, setIsSubmitted] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitted (true);
        };

    return (
        <StyledModal $showModal = {showModal}>
                <StyledModalContent>
                <StyledCloseModal onClick={closeModal}>
                    <img src="img/cancel.png" alt="botón para cerrar el modal"/>
                </StyledCloseModal>
                { isSubmitted ? (
                    <p>
                        { `Felicitaciones, ${formData.nombre} ya sos parte de esta aventura, te enviamos un mail a ${formData.mail} con tu free pass` }
                    </p>
                ) : (
                    <>
                <Form 
                    text = "¿Cómo te llamas?" 
                    name = "nombre"
                    value = {formData.nombre}
                    onChange = {handleChange}
                />
                <Form 
                    text = "Dejanos tu mail"
                    name = "mail"
                    value = {formData.mail}
                    onChange = {handleChange}
                />
                <CTA
                    onClick = {handleSubmit}
                />
                </>
                )
            }
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;