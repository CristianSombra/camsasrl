import React from "react";
import { motion } from "framer-motion";
import { logoNav } from "../../assets/images/Images";
import "../../styles";

const Navbar: React.FC = React.memo(() => {




  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="navbar bg-white navbar-expand-lg"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="#Home" className="navbar-brand">
          <img
            src={logoNav}
            alt="Logo"
            className="img-fluid"
            style={{ width: "260px" }}
          />
        </a>

        <div className="d-none d-md-block">
          <p>Aqui voy a poner texto</p>
        </div>

        <div>
          <p>boton</p>
        </div>

      </div>
    </motion.nav>
  );
});

export default Navbar;