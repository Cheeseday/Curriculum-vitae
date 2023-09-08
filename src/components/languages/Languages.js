import React from "react";
import './languages.scss';

export const Languages = (props) => {

    return(
        <div className="languages">
             <h1>
                {props.blockName}
            </h1>
            <p>
                <b>{props.langs.english.name}</b>
                <span>{props.langs.english.level}</span>
            </p>
            <p>
                <b>{props.langs.belarusian.name}</b>
                <span>{props.langs.belarusian.level}</span>
            </p>
            <p>
                <b>{props.langs.russian.name}</b>
                <span>{props.langs.russian.level}</span>
            </p>
        </div>
    ) 
}