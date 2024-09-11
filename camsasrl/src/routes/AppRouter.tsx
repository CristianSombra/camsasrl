import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../layouts";
import { Home, Services, About, Contact } from "../pages";


const AppRouter: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [servicesRef, servicesInView] = useInView({ threshold: 0.40 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.40})
    const [contactRef, contactInView] = useInView({ threshold: 0.40 });

    return (    
        <>
            <Navbar/>
            <div ref={homeRef}>
                <Suspense>
                    <Home animate={homeInView}/>
                </Suspense>
            </div>
            <div ref={servicesRef}>
                <Suspense>
                    <Services animate={servicesInView}/>
                </Suspense>
            </div>
            <div ref={aboutRef}>
                <Suspense>
                    <About animate={aboutInView}/>
                </Suspense>
            </div>
            <div ref={contactRef}>
                <Suspense>
                    <Contact animate={contactInView}/>
                </Suspense>
            </div>
        </>
    )
}


export default AppRouter;
