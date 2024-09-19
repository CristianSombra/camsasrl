import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const ScrollToTop: React.FC = () => {
    useEffect(() => {
        // Obtener el botón de scroll hacia arriba
        const scrollToTopBtn = document.getElementById("scroll-to-top");

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 300) {
                // Mostrar el botón cuando el usuario ha desplazado 300 píxeles hacia abajo
                if (scrollToTopBtn) {
                    scrollToTopBtn.style.display = "block";
                }
            } else {
                // Ocultar el botón cuando el usuario está en la parte superior de la página
                if (scrollToTopBtn) {
                    scrollToTopBtn.style.display = "none";
                }
            }
        };

        // Adjuntar el evento de scroll al componente
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento al desmontar el componente para evitar pérdidas de rendimiento
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // El segundo argumento del useEffect es un array de dependencias vacío, lo que significa que solo se ejecutará una vez al montar el componente

    // Función para hacer scroll hacia arriba cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    };

    return (
        <button id="scroll-to-top" className="btn" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};