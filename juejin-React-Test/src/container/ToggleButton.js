import React, {Component} from "react";
import {connect} from "react-redux";
import ToggleButton from "../components/common/ToggleButton";

class ToggleButtonCon extends Component {
    render() {
        return (
            <ToggleButton {...this.props}/>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        handleToggleButton: (color)=> {
            return {
                type: "TOGGLE_COLOR",
                themeColor: color
            }
        }

    }
}
ToggleButtonCon = connect(mapDispatchToProps)(ToggleButtonCon);
export default ToggleButtonCon;