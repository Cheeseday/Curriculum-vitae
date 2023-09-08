import React from "react";
import './block.scss';
import { Project } from "../project/Project";

export const Block = (props) => {

    return(
        <article className='block'>
            <h1>{props.name}</h1>
            <Project name='Minesweeper'
                     descr='Online game'
                     stack='Stack: JavaScript, CSS, HTML, Jest.'   
            />
            <Project name='Virtual Keyboard'
                     descr='Virtual keyboard that connect with your physical keyboard.'
                     stack='Stack: JavaScript, CSS, DOM, DOM Events.'   
            />
            <Project name='DiCarpio'
                     descr='Online fish and seafood store'
                     stack='Stack: JavaScript, SASS, Pug, Bootstrap, Webpack'   
            />
        </article>

    )
}