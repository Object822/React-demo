import React,{Component} from "react";
import "./ToggleButton.less";

class ToggleButton extends Component {
    render () {
        return (
            <div className="toggle_button">
                <span onClick={this.props.handleToggleButton.bind(this, "red")}></span>
            </div>
        );
    }
}
export default ToggleButton;