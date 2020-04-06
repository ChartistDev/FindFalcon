import Home from "./js/components/Home";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux"
const store = createStore();
class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
            <Home/>
            </Provider>
        )
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;