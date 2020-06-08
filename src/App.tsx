import * as React from "react";
import "./styles.css";
import { Router, Route } from "react-router-dom";
import useSearch from "./useSearch";
import { createBrowserHistory } from "history";

function SearchInput() {
  const { inputProps } = useSearch();
  return <input {...inputProps} />;
}

export default function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <SearchInput />
        </div>
      </Route>
    </Router>
  );
}
