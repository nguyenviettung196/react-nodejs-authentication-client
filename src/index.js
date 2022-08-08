import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Feature from "./components/Feature";
import Signout from "./components/Signout";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(
	reducer,
	{ auth: { authenticated: localStorage.getItem("token") } },
	applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter>
			<Provider store={store}>
				<App>
					<Route exact path="/" component={Welcome} />
					<Route path="/signin" component={Signin} />
					<Route path="/signout" component={Signout} />
					<Route path="/signup" component={Signup} />
					<Route path="/feature" component={Feature} />
				</App>
			</Provider>
		</BrowserRouter>
	</>
);
