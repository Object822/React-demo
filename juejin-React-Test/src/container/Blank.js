import React, {Component} from "react";
import Blank from "../components/Blank";
import {connect} from "react-redux";

class BlankCon extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "没有消息哦"
        }
    }
    render() {
        return (
            <Blank/>
        );
    }
}
const mapStateToProps = (state, props)=> {
    return {
        ...props,
        message: state.message
    }
}
export default connect(mapStateToProps)(BlankCon);