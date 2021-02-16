import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "../node_modules/redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			{/* <PersistGate persistor={persistor}> */}
			<App />
			{/* </PersistGate> */}
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to regist er() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
