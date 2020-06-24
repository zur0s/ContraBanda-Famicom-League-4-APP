import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"

import {
	BrowserRouter as Router,
} from "react-router-dom";


import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "../src/store/reducers/app";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>

	</Provider>,
	document.getElementById("root")
);
