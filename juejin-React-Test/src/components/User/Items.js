import React from "react";
import "./Items.less";

const SingleItem = (props)=> {
    const logo_bg = {
        "background": "url("+ props.url +") no-repeat 22px 14px"
    }
    let Button = null;
    if(props.ToggleButton) {
        Button = props.ToggleButton
        Button = <Button {...props}/>
    }
    return (
        <div key={props.id} className="user_item">
            <div className="item_logo" style={logo_bg}></div>
            <div className="item_name">{props.list}</div>
            {props.count ? <div className="item_count">{props.count}</div> : <div className="item_count">{Button}</div>}
            
        </div>
    );
}
export {
    SingleItem
};

const Items1 = (props)=> {
    return (
        <div className="item_wrapper">
            {props.items1.map((list,index)=>{
                return <SingleItem  key={index} {...list}/>
            })}
        </div>
    );
}
const Items2 = (props)=> {
    return (
        <div className="item_wrapper_1">
            {props.items2.map((list,index)=>{
                return <SingleItem {...props}  key={index} {...list}/>
            })}
        </div>
    );
}
export {
    Items1,
    Items2
};