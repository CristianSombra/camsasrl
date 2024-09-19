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
            transition={{duration: 0.4, delay: 0.4}}
            className="home-container mb-5"
            id="Home"
            >
            
            {/* Title */}    
            <div className="row title-row d-flex justify-content-center">
                <div className="col-10">
                    <motion.h1
                        initial={{y: -10, opacity: 0}}
                        animate={ animate ? {y: 0, opacity: 1} : {y: -10, opacity: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        className="custom-title">
                            Cuidando la vida
                    </motion.h1>
                    <motion.h2 
                        initial={{x: 10, opacity: 0}}
                        animate={ animate ? {x: 0, opacity: 1} : {x: 10, opacity: 0}}
                        transition={{duration: 0.8, delay: 1}}
                        className="custom-subtitle">
                            Liderando el camino
                    </motion.h2>
                    <motion.h2
                        initial={{x: 10, opacity: 0}}
                        animate={ animate ? {x: 0, opacity: 1} : {x: 10, opacity: 0}}
                        transition={{duration: 0.8, delay: 1}}
                        className="custom-subtitle">
                            hacia la salud
                    </motion.h2>
                </div>
            </div>

            <img src={imageHome} className="w-100 home-image d-none d-md-block" alt="Home Image"/>
            <img src={imageHomeMovile} className="w-100 home-image-mobile d-block d-md-none" alt="Home Image"/>
            
            {/* Buttons */}
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.4}}
                className="row buttons-row d-fex justify-content-center text-center mb-5 mb-lg-0">
                    <button className="col-12 col-md-4 col-lg-2 mb-5 mb-lg-0">
                        <a href="#About" className="button-thirdy">
                            <FontAwesomeIcon icon={faUserFriends} /> Nosotros
                        </a>
                    </button>
                    <button className="col-12 col-md-4 col-lg-2 mb-5 mb-lg-0">
                        <a href="#Services" className="button-primary">
                            <FontAwesomeIcon icon={faStethoscope} /> Servicios
                        </a>
                    </button>
                    <button className="col-12 col-md-4 col-lg-2 mb-5 mb-lg-0">
                        <a href="#Contact" className="button-secondary">
                            <FontAwesomeIcon icon={faPhoneAlt} /> Contácto
                        </a>
                    </button>
                    <div className="row my-5 d-flex justify-content-center d-none d-md-block">
                        <ButtonSeeMore/>
                    </div>
            </motion.div>

            

        </motion.section>
    )
}

export default Home;