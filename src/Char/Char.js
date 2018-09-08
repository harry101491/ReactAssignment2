import React from "react";

import "./Char.css";

const Char = (props) => {
    return (
        <div 
            className="Char"
            onClick={ props.remove }
        >
            <p>
                { props.value }
            </p>
        </div>
    );
};

export default Char;