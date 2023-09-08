import React from "react";
import './aside.scss';
import { Details } from "../details/Details";
import { Links } from "../links/Links";
import { Skills } from "../skills/Skills";
import avatar from '../../image/avatar_2.jpg'; 
import { Languages } from "../languages/Languages";

export const Aside = (props) => {

    const details = {
        address: {
            country: 'Poland',
            town: 'Warsaw'
        },
        phone: '+375 29 163-14-38',
        email: 'aleksandrkirilushkin@gmail.com'
    }
    const languages = {
        english: {
            name: 'English',
            level: 'Upper-Intermediate'
        }, 
        belarusian: {
            name: 'Belarusian',
            level: 'Native'
        }, 
        russian: {
            name: 'Russian',
            level: 'Native'
        }, 
    }

    return(
        <aside className="aside">
            <img src={avatar} alt='avatar' width={130} height={130}/>
            <Details details={details} blockName='Details'/>
            <Links blockName='Links'/>
            <Skills blockName='Skills'/>
            <Languages langs={languages} blockName='Languages'/> 
            <div className="masks">

            </div>
        </aside>
    )
}