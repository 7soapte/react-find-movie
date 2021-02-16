import React from "react";
import { render } from "react-dom";
import SearchMovies from "./components/SearchMovies";
import "./style.scss";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">React movie search</h1>
      <SearchMovies />
    </div>
  );
};

render(<Main />, document.getElementById("root"));
