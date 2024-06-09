import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import BabyFriendly from "./pages/BabyFriendly";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<SignIn />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/babyfriendly" element={<BabyFriendly />} />
    </Routes>
  </BrowserRouter>
);
