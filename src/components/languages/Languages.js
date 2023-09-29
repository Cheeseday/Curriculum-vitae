import React from "react";
import './languages.scss';

export const Languages = (props) => {

  return (
    <div className="languages">
      <h1>
        {props.blockName}
      </h1>
      {
        Object.keys(props.langs).map((item, index) => {
        return(
          <p key={index}>
            <b>{props.langs[item].name}</b>
            <span>{props.langs[item].level}</span>
          </p>
        )
        })
      }
    </div>
  ) 
}