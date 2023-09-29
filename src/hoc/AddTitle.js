import React from "react";

export const AddTitle = (Component, className) => {
  return (props) => {
    return(
        <>
          <h1>{props.title}</h1>
          <Component />
        </>
    )
  }
}