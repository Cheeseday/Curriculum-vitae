import React from "react";
import './aside.scss';
import { Details } from "../details/Details";
import { Links } from "../links/Links";
import { Skills } from "../skills/Skills";
import { Languages } from "../languages/Languages";

export const Aside = (props) => {

  const details = {
    address: {
      country: 'Poland',
      town: 'Kraków'
    },
    phone: '+48 573 249 426',
    email: 'aleksandrkirilushkin@gmail.com'
  }
  const languages = {
    english: {
      name: 'English',
      level: 'Intermediate (B1+)'
    }, 
    polish: {
      name: 'Polish',
      level: 'Pre-Intermediate (A2)'
    }, 
    belarusian: {
      name: 'Belarusian',
      level: 'Native'
    }, 
    russian: {
      name: 'Russian',
      level: 'Native'
    }
  }

  return (
    <aside className="aside">
      <Details details={details} blockName='Details'/>
      <Links blockName='Links'/>
      <Skills blockName='Skills'/>
      <Languages langs={languages} blockName='Languages'/> 
    </aside>
  )
}