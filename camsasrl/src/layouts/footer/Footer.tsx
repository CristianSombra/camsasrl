import React from "react";
import { motion } from "framer-motion";
import { logo } from "../../assets/images/Images";
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
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-4 d-none d-md-block">
                        <img src={logo} alt="Logo" className="img-fluid" style={{width: '260px'}}/>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-end ">
                    <div>
                        <FontAwesomeIcon icon={faFacebook} className="me-4" size="2x" />
                        <FontAwesomeIcon icon={faInstagram} className="me-4" size="2x" />
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row d-flex justify-content-center text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        
        </motion.footer>
    )
}

export default Footer;