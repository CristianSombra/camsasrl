import React from "react";
import '../../styles';

export const SpinnerLoader: React.FC = () => {
    return(
        <div className="container-spinner" aria-label="Cargando...">
            <div className="spinner"></div>
        </div>
    );
}