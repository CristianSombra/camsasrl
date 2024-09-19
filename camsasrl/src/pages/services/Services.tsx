import React from "react";
import { motion } from "framer-motion";
import { firstSection, secondSection } from "../../assets/images/Images";
import { AnimateProps } from "../../components";

const Services: React.FC <AnimateProps>= ({animate}) => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={ animate ? { opacity: 1 } : { opacity:0 }}
            transition={{duration: 0.4, delay: 0.4}}
            className="container-fluid"
            id="Services"
            >
            
            {/* Title */}
            <div className="row d-flex justify-content-center text-center">
                <div className="col-12">
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={ animate ? {opacity:1} : {opacity:0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        >
                            CUIDADO EN EL QUE PUEDES CREER
                    </motion.h1>
                    <motion.h2
                        initial={{x: 10, opacity: 0}}
                        animate={ animate ? {x: 0, opacity:1} : {x: 10, opacity: 0}}
                        transition={{duration: 0.6, delay: 0.6}}
                        >
                            Nuestros Servicios
                    </motion.h2>
                </div>
            </div>

            {/* First section */}
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12 col-md-5 col-lg-4">
                    <h3>Title here</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dicta aliquid vitae provident adipisci nesciunt eos laboriosam, nemo inventore praesentium! Laboriosam ipsam quam repudiandae id doloremque labore facere porro temporibus.</p>
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                    <img src={firstSection} className="img-fluid rounded shadow-image" alt="" />
                </div>
            </div>

            {/* Second section */}
            <div className="row my-3 d-flex justify-content-center">
                <div className="col-12 col-md-5 col-lg-4">
                    <img src={secondSection} className="img-fluid rounded shadow-image" alt="" />
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                    <h3>Title here</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore eligendi accusantium, tempora repudiandae ut illo nobis necessitatibus provident voluptas nihil fuga culpa voluptatem maxime sed optio quasi perferendis similique quod?</p>
                </div>
            </div>
            

        </motion.section>
    )
};

export default Services;