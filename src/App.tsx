import * as React from "react";
import "./styles.css";
import { Router, Route, useLocation } from "react-router-dom";
import useSearch from "./useSearch";
import { createBrowserHistory } from "history";
import useAxios from "axios-hooks";

function SearchInput() {
  const { inputProps, buttonProps } = useSearch();
  return (
    <div>
      <input {...inputProps} />
      <button {...buttonProps}>clear</button>
    </div>
  );
}

export default function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <SearchInput />
          <Characters />
        </div>
      </Route>
    </Router>
  );
}

function Characters() {
  const location = useLocation();
  console.log("location: ", location);
  const [{ data, loading, error }] = useAxios<RootObject>(
    `https://swapi.dev/api/people/${location.search}`
  );

  if (loading) return <div>"loading.."</div>;

  return (
    <div>
      {data.results.map((char) => (
        <div key={char.name}>{char.name}</div>
      ))}
    </div>
  );
}

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
