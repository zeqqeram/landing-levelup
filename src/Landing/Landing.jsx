import React, { useState } from "react";
import Banner from "../components/Banner/Banner.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Details from "../components/Details/Details.jsx";
import Bullets from "../components/Bullets/Bullets.jsx";
import Clients from "../components/Clients/Clients.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import FormSection from "../components/FormSection/FormSection.jsx";
import Modal from "../components/Modal/Modal.jsx";
import Header from "../components/Header/Header";
 
const Landing = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClickCTA = () => {setShowModal (true); };
    const handleCloseModal = () => {setShowModal (false); };

    return (
        <>
            <Header/>
            <Banner
                openModal = {handleClickCTA}
            />
            <Details/>
            <Bullets/>
            <Clients/>
            <Reviews/>
            <FormSection
                openModal = {handleClickCTA}
            />
            <Modal
                showModal = {showModal}
                closeModal = {handleCloseModal}
            />
            <Footer/>
        </>
    );
};

export default Landing;