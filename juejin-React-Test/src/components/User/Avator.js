import React from "react";
import "./Avator.less";

export default (props)=> {
    return (
        <div className="avator">
            <div className="avator__logo"></div>
            <div className="avator__introduction">
                <div className="avator__introduction--name">{props.name}</div>
                <div className="avator__introduction--occupation">{props.occupation}</div>
            </div>
            <div className="avator__detail">
                >
            </div>
        </div>
    );
}