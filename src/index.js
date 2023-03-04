import ReactDom from "react-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "./components/style.css";
import { AuthProvider } from "./routes/auth";

ReactDom.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
