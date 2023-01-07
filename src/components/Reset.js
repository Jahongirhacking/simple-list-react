import React from "react";
import "./Reset.css";

export function Reset(props) {
    const {children, reset} = props;
    return (
        <button onClick={(e) => reset()} className="reset">
            {children}
        </button>
    )
}