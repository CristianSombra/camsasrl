import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const Services = lazy(() => import("./services/Services"));
export const About = lazy(() => import("./about/About"));
export const Contact = lazy(() => import("./contact/Contact"));