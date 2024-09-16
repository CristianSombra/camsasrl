import React from "react";
import { motion } from "framer-motion";
import { AnimateProps, ButtonSeeMore } from "../../components";
import "../../styles";

const Home: React.FC <AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{opacity: 0}}
            animate={ animate ? { opacity: 1 } : { opacity:0 }}
            transition={{duration: 0.6}}
            className="home-container"
            id="Home"
            >

            {/* Title */}    
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <h1 className="custom-title">Cuidando la vida</h1>
                    <h2 className="custom-subtitle">Liderando el camino</h2>
                    <h2 className="custom-subtitle">hacia la salud</h2>
                    <button className="button-primary">
                        Contáctanos
                    </button>
                </div>
            </div>

            {/* Buttons */}
            <div className="row buttons-row d-fex justify-content-center text-center align-items-end">
                <div className="col-2">
                    <button className="button-thirdy">
                            Contáctanos
                    </button>
                </div>
                <div className="col-2">
                    <button className="button-primary">
                            Contáctanos
                    </button>
                </div>
                <div className="col-2">
                    <button className="button-secondary">
                            Contáctanos
                    </button>
                </div>
                <div className="row my-5 d-flex justify-content-center">
                    <ButtonSeeMore/>
                </div>
            </div>

            

        </motion.section>
    )
}

export default Home;