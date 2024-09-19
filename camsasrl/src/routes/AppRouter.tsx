import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { SpinnerLoader, ScrollToTop } from "../components";
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
                <Suspense fallback={<SpinnerLoader/>}>
                    <Home animate={homeInView}/>
                </Suspense>
            </div>
            <div ref={servicesRef}>
                <Suspense fallback={<SpinnerLoader/>}>
                    <Services animate={servicesInView}/>
                </Suspense>
            </div>
            <div ref={aboutRef}>
                <Suspense fallback={<SpinnerLoader/>}>
                    <About animate={aboutInView}/>
                </Suspense>
            </div>
            <div ref={contactRef}>
                <Suspense fallback={<SpinnerLoader/>}>
                    <Contact animate={contactInView}/>
                </Suspense>
            </div>
            <ScrollToTop/>
        </>
    )
}


export default AppRouter;
