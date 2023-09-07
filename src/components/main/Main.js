import React from "react";
import './main.scss';

export const Main = (props) => {

    return(
        <main className="main">
            <h1>{props.name}</h1>
            <h3>{props.position}</h3>
        </main>
    )
}