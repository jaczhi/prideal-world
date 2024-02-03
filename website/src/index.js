import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Scenario1 from "./pages/scenario1/Scenario1";
import Scenario2 from "./pages/scenario2/Scenario2";
import Scenario3 from "./pages/scenario3/Scenario3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/scenario1",
    element: <Scenario1 />
  },
  {
    path: "/scenario2",
    element: <Scenario2 />
  },
  {
    path: "/scenario3",
    element: <Scenario3 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
