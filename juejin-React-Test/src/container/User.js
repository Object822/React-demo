import React, {Component} from "react";
import {connect} from "react-redux";
import User from "../components/User";
import like from "../../psd/miniImg/like.png";
import ToggleButtonCon from "../container/ToggleButton";

class UserCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            occupation: ""
        }
    }
    componentWillMount() {
        const _t = this;
        setTimeout(()=> {
            _t.setState(
                {
                    name: "贾斯汀",
                    occupation: "歌手"
                }
            ); 
        }, 0);
    }
    render() {
        
        return (
            <User {...this.props} {...this.state}/>
        );
    }
}
const mapStateToProps = (state, props)=> {
    return {
        ...props,
        items1: [
            {
                url: like,
                list: "jack",
                count: "21篇"
            },
            {
                url: like,
                list: "rose",
                count: "22篇"
            },
            {
                url: like,
                list: "mount",
                count: "23篇"
            },
            {
                url: like,
                list: "distory",
                count: "24篇"
            }
        ],
        items2: [
            {
                url: like,
                list: "jack"
            },
            {
                url: like,
                list: "rose"
            },
            {
                url: like,
                list: "mount",
                ToggleButton: ToggleButtonCon
            },
            {
                url: like,
                list: "distory"
            }
        ]
    }
}
const mapDispatchToProps = (dispatch)=> {
    
    return {
        onToggleButton: (themeColor) => {
            dispatch({
                type: "TOGGLE_COLOR",
                themeColor: themeColor
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCon);