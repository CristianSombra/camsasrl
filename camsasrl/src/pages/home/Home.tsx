import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";
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
                
            <div className="row">
                <div className="col">
                    <h1>Home</h1>
                </div>
            </div>

        
        
        </motion.section>
    )
}

export default Home;