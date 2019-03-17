import React from "react";
import {Switch, Route} from "react-router-dom";
import MainCon from "../container/Main";
import SearchCon from "../container/Search";
import NoteCon from "../container/Note";
import UserCon from "../container/User";

export default ()=> {
    return (
        <Switch>
            <Route path="/home" component={MainCon}/>
            <Route path="/search" component={SearchCon}/>
            <Route path="/note" component={NoteCon}/>
            <Route path="/user" component={UserCon}/>
        </Switch>
    )
}