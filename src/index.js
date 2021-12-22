import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import rootReducer from "./reducers";
import App from "./App";
import { createStore } from "redux";
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
