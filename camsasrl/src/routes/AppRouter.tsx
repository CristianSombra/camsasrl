import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { Home, Services } from "../pages";


const AppRouter: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [servicesRef, servicesInView] = useInView({ threshold: 0.40 });

    return (    
        <>
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
        </>
    )

}


export default AppRouter;
