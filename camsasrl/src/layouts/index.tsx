import { lazy } from "react";

export const Navbar = lazy(() => import('./navbar/Navbar'));
export const NavbarHome = lazy(() => import('./navbar/NavbarHome'));
export const Footer = lazy(()=> import('./footer/Footer'));