import React from "react";
import './links.scss';

export const Links = (props) => {

  return (
    <div className="links">
      <h1>
        {props.blockName}
      </h1>
      <a href="https://www.linkedin.com/in/ales-kirylushkin/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://www.instagram.com/ales_kirylushkin/" target="_blank" rel="noreferrer">Instagram</a>
      <a href="https://github.com/Cheeseday" target="_blank" rel="noreferrer" className="github">GitHub</a>
      <a href="https://www.codewars.com/users/Cheeseday" target="_blank" rel="noreferrer">Codewars</a>
    </div>
  )
}