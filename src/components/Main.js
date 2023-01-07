import React from "react";
import {Reset} from "./Reset";
import "./Main.css";

export function Main(props) {
    const {data, reset, increase, decrease, deleteComponent} = props;
    return (
        <div className="Main">
            <Reset reset={reset}>Reset</Reset>
            {
                data.map((el) => {
                    return(
                        <div className="data">
                            <p className="product__name">{el.name}</p>
                            <p className="product__quantity">
                                {(el.quantity !== 0 ? el.quantity : "zero")}
                            </p>
                            <button
                                onClick={(e) => decrease(el.objID)}
                                disabled={el.quantity === 0}
                                className="dec val"
                            >-</button>
                            <button
                                onClick={(e) => increase(el.objID)}
                                disabled={el.quantity === 10}
                                className="inc val"
                            >+</button>
                            <button
                                onClick={(e) => deleteComponent(el.objID)}
                                className="del val"
                            >delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}