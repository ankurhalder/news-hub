import "./App.css";

import { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<News pageSize={5} country="in" category="General" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}
