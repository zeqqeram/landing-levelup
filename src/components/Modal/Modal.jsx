import styled from "styled-components";
import Form from "./Form/Form";
import CTA from "../CTA/CTA";

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
    return (
        <StyledModal $showModal = {showModal}>
            <StyledModalContent>
                <StyledCloseModal onClick={closeModal}>
                    <img src="img/cancel.png" alt="botón para cerrar el modal"/>
                </StyledCloseModal>
                <Form 
                    text = "¿Cómo te llamas?" 
                    name = "nombre"
                />
                <Form 
                    text = "Dejanos tu mail"
                    name = "mail"
                />
                <CTA/>
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;