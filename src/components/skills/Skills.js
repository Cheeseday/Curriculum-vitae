import React from "react";
import './skills.scss';

export const Skills = (props) => {

  return(
    <div className="skills">
      <h1>
        {props.blockName}
      </h1>
      <div>
        <b>JavaScript</b>
      </div>
      <div>
        <b>HTML & CSS</b>
      </div>
      <div>
        <b>SASS</b>
      </div>
      <div>
        <b>React</b>
      </div>
      <div>
        <b>TypeScript</b>
      </div>
      <div>
        <b>Bootstrap</b>
      </div>
      <div>
        <b>Node.js / Nest.js</b>
      </div>
      <div>
        <b>Git</b>
      </div>
      <div>
        <b>Webpack / Parcel</b>
      </div>
    </div>
  )
}