import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";
import { sectionAbout } from "../../assets/images/Images";

const About: React.FC <AnimateProps>= ({animate}) => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate= { animate ? {opacity: 1} : {opacity: 0} }
            transition={{duration: 0.4, delay: 0.4}}
            className="container-fluid"
            id="About"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center text-center">
                <div className="col-12">
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={ animate ? {opacity:1} : {opacity:0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        >
                            BIENVENIDO A CAMSA
                    </motion.h1>
                    <motion.h2
                        initial={{x: 10, opacity: 0}}
                        animate={ animate ? {x: 0, opacity:1} : {x: 10, opacity: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        >
                            Un lugar para recibir atención
                    </motion.h2>
                </div>
            </div>

            {/* Section */}

            <div className="row my-4 d-flex justify-content-center">
                <div className="col-12 col-md-8 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores amet praesentium harum nam unde placeat id earum libero minus ea iste atque, autem quibusdam qui dolore. Ullam, ab aperiam!</p>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8">
                    <img src={sectionAbout} className="img-fluid rounded shadow-image" alt="" />
                </div>
            </div>
            


        </motion.section>
    )
};

export default About;