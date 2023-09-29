import React, { Fragment } from "react";
import { AddClass } from "../../hoc/AddClass";
import './layout.scss';
import { Main } from '../main/Main';
import { Aside } from "../aside/Aside";


const Layout = (props) => {
  return (
    <Fragment>
      <div className='content'>
        <Aside/>
        <Main name='Aliaksandr Kirylushkin' position='JavaScript | React Front end Developer'/>
      </div>
    </Fragment>
  )
}
  
export default AddClass(Layout, 'layout');