import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";
import { FormContact } from "../../components/index";
import "../../styles";

const Contact: React.FC <AnimateProps>= ({animate}) => {
    const handleFormSuccess = () => {}

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={ animate ? {opacity: 1} : {opacity:0}}
            transition={{duration: 0.6}}
            className="container-fluid"
            id="Contact"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center text-center">
                <div className="col-12">
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={ animate ? {opacity:1} : {opacity:0}}
                        transition={{duration: 0.3, delay: 0.4}}
                        >
                            PUEDES ESCRIBIRNOS
                    </motion.h1>
                    <motion.h2
                        initial={{x: 10, opacity: 0}}
                        animate={ animate ? {x: 0, opacity:1} : {x: 10, opacity: 0}}
                        transition={{duration: 0.4, delay: 0.4}}
                        >
                            Contacto
                    </motion.h2>
                </div>
            </div>

            {/* Section */}
            <div className="row mb-5 d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <FormContact onSuccess={handleFormSuccess} />
                </div>
            </div>


            <div className="row mb-5 d-flex justify-content-center text-center">
                <div className="col-12 col-md-8 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias, eum reiciendis voluptatem dolorem sint excepturi eligendi aliquid consectetur corporis facere sequi quasi animi, assumenda dolor nulla. Eveniet, laboriosam quasi quae accusamus in aperiam sed provident ipsum architecto eligendi ab incidunt tempore aut totam iusto, alias iure vero et maiores.</p>
                </div>
                <div className="col-12 col-md-8 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias, eum reiciendis voluptatem dolorem sint excepturi eligendi aliquid consectetur corporis facere sequi quasi animi, assumenda dolor nulla. Eveniet, laboriosam quasi quae accusamus in aperiam sed provident ipsum architecto eligendi ab incidunt tempore aut totam iusto, alias iure vero et maiores.</p>
                </div>
            </div>
            
        </motion.section>
    )
};

export default Contact;