import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store";

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
