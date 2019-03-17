import React, {Component} from "react";
import "../style/Blank.less";

class Blank extends Component{
    render() {
        return (
            <div className="blank__content">
                <div className="message-icon"></div>
                <div className="message-content">{this.props.message}</div>
            </div>
        );
    }
    
}
export default Blank;