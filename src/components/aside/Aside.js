import React from "react";
import './aside.scss';
import { Details } from "../details/Details";
import { Links } from "../links/Links";
import { Skills } from "../skills/Skills";
import avatar from '../../image/avatar_2.jpg'; 

export const Aside = (props) => {

    const details = {
        address: {
            country: 'Poland',
            town: 'Warsaw'
        },
        phone: '+375 29 163-14-38',
        email: 'aleksandrkirilushkin@gmail.com'
    }

    return(
        <aside className="aside">
            <img src={avatar} alt='avatar' width={130} height={130}/>
            <Details details={details}/>
            <Links/>
            <Skills/>
            <div className="masks">

            </div>
        </aside>
    )
}