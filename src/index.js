import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const element = <h2 className="text-primary">Hello Workshop</h2>;
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
