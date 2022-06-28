import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Search from "./Search";
import Home from "./Home";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/search" component={Search} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
