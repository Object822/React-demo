import React from "react";
import {connect} from "react-redux";
import Routes from "./Routes";
import RouterLink from "./RouterLink";

 const RoutesCon =(props)=>{
    console.log(props);
    return (
        <div className="route-wrapper">
            <Routes/>
            <RouterLink/>
        </div>
    )
}
const mapStateToProps = (state, props)=> {
    return {
        ...props,
        themeColor: state.themeColor
    }
}
export default connect(mapStateToProps)(RoutesCon);