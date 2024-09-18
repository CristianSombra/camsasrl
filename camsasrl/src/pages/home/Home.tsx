import React from "react";
import { motion } from "framer-motion";
import { imageHome, imageHomeMovile } from '../../assets/images/Images';
import { AnimateProps, ButtonSeeMore } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faStethoscope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "../../styles";

const Home: React.FC <AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{opacity: 0}}
            animate={ animate ? { opacity: 1 } : { opacity:0 }}
            transition={{duration: 0.6}}
            className="home-container"
            id="Home"
            >
            
            {/* Title */}    
            <div className="row title-row d-flex justify-content-center">
                <div className="col-10">
                    <h1 className="custom-title">Cuidando la vida</h1>
                    <h2 className="custom-subtitle">Liderando el camino</h2>
                    <h2 className="custom-subtitle">hacia la salud</h2>
                </div>
            </div>

            <img src={imageHome} className="img-fluid w-100 home-image d-none d-md-block" alt="Home Image"/>
            <img src={imageHomeMovile} className="img-fluid home-image d-block d-md-none" alt="Home Image"/>
            
            {/* Buttons */}
            <div className="row buttons-row d-fex justify-content-center text-center mb-5 mb-lg-0">
                <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
                    <button className="button-thirdy">
                        <FontAwesomeIcon icon={faUserFriends} /> Nosotros
                    </button>
                </div>
                <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
                    <button className="button-primary">
                        <FontAwesomeIcon icon={faStethoscope} /> Servicios
                    </button>
                </div>
                <div className="col-12 col-md-4 col-lg-2 mb-4 mb-lg-0">
                    <button className="button-secondary">
                        <FontAwesomeIcon icon={faPhoneAlt} /> Contácto
                    </button>
                </div>
                <div className="row my-5 d-flex justify-content-center d-none d-md-block">
                    <ButtonSeeMore/>
                </div>
            </div>

            

        </motion.section>
    )
}

export default Home;