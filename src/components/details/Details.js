import React from "react";
import './details.scss';

export const Details = (props) => {

    return(
        <div className="details">
            <h2>
                Details
            </h2>
            <div className="address">
                Address
                <br/>
                <span>{props.details.address.country}</span>
                <br/>
                <span>{props.details.address.town}</span>
            </div>

            <div className="phone">
                Phone
                <br/>
                <span>{props.details.phone}</span>
            </div>

            <div className="email">
                Email
                <br/>
                <span>{props.details.email}</span>
            </div>
        </div>
    )
} 