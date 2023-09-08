import React from "react";
import './project.scss';

export const Project = (props) => {

    return(
        <div className="project">
            <h3 className="project_name">{props?.name}</h3>
            <p className="project_description">
                {props.descr}
            </p>
            <p className="project_stack">
                {props.stack}
            </p>
        </div>
    )
}