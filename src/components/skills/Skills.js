import React from "react";
import './skills.scss';

export const Skills = (props) => {


    return(
        <div className="skills">
            <h1>
                {props.blockName}
            </h1>
            <p>
                <b>JavaScript</b>
                <span>Expert</span>
            </p>
            <p>
                <b>HTML & CSS</b>
                <span>Expert</span>
            </p>
            <p>
                <b>SASS</b>
                <span>Expert</span>
            </p>
            <p>
                <b>React</b>
                <span>Experienced</span>
            </p>
            <p>
                <b>TypeScript</b>
                <span>Experienced</span>
            </p>
            <p>
                <b>Bootstrap</b>
                <span>Experienced</span>
            </p>
            <p>
                <b>Node.js</b>
                <span>Skillful</span>
            </p>
            <p>
                <b>Nest.js</b>
                <span>Skillful</span>
            </p>
        </div>
    )
}