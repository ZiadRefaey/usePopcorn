import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./StarRating.jsx";
import ExpandableText from "./ExpandableText.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <ExpandableText /> */}
    {/* <StarRating size={48} color="blue" defaultRating={3} /> */}
  </React.StrictMode>
);
