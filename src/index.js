import Home from "./js/components/Home";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./js/Reducers";
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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