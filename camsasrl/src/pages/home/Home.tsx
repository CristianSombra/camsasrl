import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";

const Home: React.FC <AnimateProps>= ({animate}) => {
    return(
        <motion.h1
            initial={{opacity: 0}}
            animate={ animate ? { opacity: 1 } : { opacity:0 }}
            transition={{duration: 0.6}}
            id="Home"
            >
                This is home
            </motion.h1>
    )
}

export default Home;