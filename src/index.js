import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";

import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";

import { HashRouter as Router } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// serviceWorker.unregister();
