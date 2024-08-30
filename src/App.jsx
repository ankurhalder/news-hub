import "./App.css";

import { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./pages/Example";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={5} country="in" category="General" />}
            ></Route>
            <Route path="/example" element={<Example />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}
