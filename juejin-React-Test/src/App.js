// 主页面
import React, { Component } from 'react';
import {connect} from "react-redux";
import Router from "./router/Router";
import "./style/common.less";

class App extends Component{
  
  render() {
    return (
      <Router/>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    ...props,
    themeColor: state.themeColor 
  }
}
App = connect(mapStateToProps)(App);
export default App;
