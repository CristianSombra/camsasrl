import React from "react";
import { logoNav } from "../../assets/images/Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = React.memo(() => {
    return (
        <nav
            className="navbar navbar-light bg-white fixed-top"
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="navbar-brand">
                    <img src={logoNav} alt="Logo" className="img-fluid mt-lg-1" style={{ width: '260px' }} />
                </div>
                {/* <div className="ms-lg-3 me-1 me-lg-4">
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </div> */}
                <div className="d-flex align-items-end gap-2 ms-lg-3 me-1 me-lg-4">
                    <span className="fw-semibold me-2 text-dark d-none d-md-block">Solicita nuestros servicios</span>
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
