import React from "react";
import { motion } from "framer-motion";
import { logo } from "../../assets/images/Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = React.memo(() => {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="navbar navbar-light bg-white fixed-top"
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="navbar-brand">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: '260px' }} />
                </div>
                <ul className="navbar-nav d-none d-lg-flex flex-row ms-auto">
                    <li className="nav-item mx-3">
                        <a href="#Services" className="nav-link" aria-label="Servicios">Servicios</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a href="#About" className="nav-link" aria-label="Nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a href="#Contact" className="nav-link" aria-label="Contacto">Contacto</a>
                    </li>
                </ul>
                <div className="ms-lg-3 me-1 me-lg-4">
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </div>
            </div>
        </motion.nav>
    );
});

export default Navbar;
