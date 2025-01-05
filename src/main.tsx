import { createRoot } from "react-dom/client";
import Root from "./root.tsx";
import store from "./store";
import "./index.css";
import { history } from "./utils/history";

createRoot(document.getElementById("root")!).render(<Root />);
