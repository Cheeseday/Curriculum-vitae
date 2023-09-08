import React from "react";
import './details.scss';

export const Details = (props) => {

    return(
        <div className="details">
            <h1>
                {props.blockName}
            </h1>
            <div className="address">
                <b>
                    Address
                </b>
                <br/>
                <span>{props.details.address.country}</span>
                <br/>
                <span>{props.details.address.town}</span>
            </div>

            <div className="phone">
                <b>
                    Phone
                </b>
                <br/>
                <span>{props.details.phone}</span>
            </div>

            <div className="email">
                <b>
                    Email
                </b>
                <br/>
                <span>{props.details.email}</span>
            </div>
        </div>
    )
} 