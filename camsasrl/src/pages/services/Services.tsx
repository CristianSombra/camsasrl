import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";

const Services: React.FC <AnimateProps>= ({animate}) => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={ animate ? { opacity: 1 } : { opacity:0 }}
            transition={{duration: 0.6}}
            className="container-fluid my-5"
            id="Services"
            >
            
            <div className="row d-flex justify-content-center text-center">
                <h1>CUIDADO EN EL QUE PUEDES CREER</h1>
                <h2>Nuestros Servicios</h2>
            </div>


        </motion.section>
    )
};

export default Services;