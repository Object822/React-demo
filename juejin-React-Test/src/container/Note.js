import React, {Component} from "react";
import {connect} from "react-redux";
import Note from "../components/Note";

class NoteCon extends Component {
    render() {
        return (
            <Note/>
        );
    }
}
const mapStateToProps = (state, props) =>{
    return {
        ...props,
        message: "现在没有消息哦！",
        themeColor: state.themeColor
    }
}
NoteCon = connect(mapStateToProps)(NoteCon);
export default NoteCon;