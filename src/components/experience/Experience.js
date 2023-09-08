import React from "react";
import './experience.scss';

export const Experience = (props) => {

    return(
        <article className="article">
            <h1 className="article_name">
                {props.name}
            </h1>
            <h3 className="article_descr">
                {props.position},&nbsp;{props.company}
            </h3>
            <div className="duration">
                <span>{props.start}</span>
                &nbsp;-&nbsp;
                <span>{props.end}</span>
                {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#787c82",}} /> */}
            </div>
        </article>
    )
}