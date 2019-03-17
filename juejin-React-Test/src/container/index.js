import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import TodoInput from "./TodoInput";
import * as TodoAction from "../redux/actions/index";
const mapStateToProps = (state, props)=> ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch)=> ({
    action: bindActionCreators(TodoAction, dispatch)
})
class Container extends Component {
    render() {
        return (
            <div className="container">
                <TodoInput {...this.props}/>
            </div>
        );
    }
}
Container = connect(mapStateToProps, mapDispatchToProps)(Container)
export default Container;