import React from "react";
import Header from "./common/Header";
import Avator from "./User/Avator";
import {Items1, Items2} from "./User/Items";
import "./User.less";

export default (props)=> {
    console.log(props);
    return (
        <div className="user_page">
            <Header>用户</Header>
            <Avator {...props}/>
            <Items1 {...props}/>
            <Items2 {...props}/>
        </div>
    )
}