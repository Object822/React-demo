import React from "react";
import Note from "./common/Header";
import Blank from "./Blank";
import "./Note.less";

export default (props)=> {
    return (
        <div className="note-wrapper">
            <Note>
                消息
            </Note>
            <Blank {...props}/>
        </div>
    )
}