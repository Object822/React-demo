import React from "react";
import {Link} from "react-router-dom";
import "./RouterLink.less";
import home from "../../psd/miniImg/home.gif";
import search from "../../psd/miniImg/search.gif";
import note from "../../psd/miniImg/note.gif";
import user from "../../psd/miniImg/user.gif";

let css = {
    home: {
        background: "url("+ home +") no-repeat 32px 13px"
    },
    search: {
        background: "url("+ search +") no-repeat 32px 13px"
    },
    note: {
        background: "url("+ note +") no-repeat 32px 13px"
    },
    user: {
        background: "url("+ user +") no-repeat 32px 13px"
    }
}

export default ()=> {
    return (
        <ul className="router">
            <li><Link to='/home' style={css.home}></Link></li>
            <li><Link to='/search' style={css.search}></Link></li>
            <li><Link to='/note' style={css.note}></Link></li>
            <li><Link to='/user' style={css.user}></Link></li>
        </ul>
    )
}