import React from "react";
import { logo } from "../../assets/images/Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = React.memo(() => {
    return (
        <nav
            className="navbar navbar-light bg-white fixed-top"
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="navbar-brand">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: '260px' }} />
                </div>
                <div className="ms-lg-3 me-1 me-lg-4">
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
