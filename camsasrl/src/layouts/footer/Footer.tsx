import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            >
            
            <div className="container">
                <hr />
                <div className="row d-flex justify-content-between align-items-center">
                <div className="col-12 text-center">
                    <div>
                        <FontAwesomeIcon icon={faFacebook} className="me-4" size="3x" />
                        <FontAwesomeIcon icon={faInstagram} className="me-4" size="3x" />
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                        </div>
                    </div>
                </div>


                <div className="row d-flex justify-content-center text-center mt-2">
                    <p>Camsa srl - Todos los derechos reservados</p>
                </div>
            </div>
        
        </motion.footer>
    )
}

export default Footer;