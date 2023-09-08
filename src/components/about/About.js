import React from "react";
import './about.scss';

export const About = (props) => {

    return(
        <article className="about">
            <h1>{props.about.name}</h1>
            <p>{props.about.summary}</p>
        </article>
    )
}
