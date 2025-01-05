import { RouterProps, BrowserRouter } from "react-router";
import { Provider, ProviderProps } from "react-redux";
import App from "./components/app";

interface RootProps
  extends Omit<RouterProps, "children">,
    Omit<ProviderProps, "children"> {}

function Root({ store }: RootProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
