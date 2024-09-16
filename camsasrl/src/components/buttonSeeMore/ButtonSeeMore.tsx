import React from "react"
import '../../styles';

const ButtonSeeMore: React.FC = () => {
    return (
        <button className="btn-father"> 
        <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
        </span>
        <span className="button-text">Ver más</span>
    </button>
    )
}

export default ButtonSeeMore;