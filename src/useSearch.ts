// Generated with util/create-component.js
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";

export type SearchInputProps = Pick<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "value" | "onChange" | "onKeyDown"
>;


interface UseSearchOptions {
  throttle?: number;
  debounce?: number
}

function useSearch(param = "search", options: UseSearchOptions={debounce:100, throttle: 1000,
  }) {


  const { pathname } = useLocation();
  const history = useHistory();
  

  const [value, setValue] = React.useState(new URLSearchParams(window.location.search).get(param) ?? "");

  const handleReset = () => {
    setValue("");
    history.replace(pathname);
  };

  const handleSearch = (value: string) => {
    if (!value) history.push(pathname);

    history.replace(`${pathname}?${qs.stringify({ [param]: value })}`);
  };

  //   const throttled = throttle(500, (value) => handleSearch(value));

  //   const debounced = debounce(500, (value) => handleSearch(value));

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    
    setValue(value);
    console.log(window.location.search)
const currentUrl = qs.stringifyUrl({url: window.location.pathname,query: {[param]: value}})
    window.history.pushState({},"Results for `Cats`",currentUrl);
    
  };

  const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (event ) => {
    console.log(event.key)
    if (event.key === "Enter") handleSearch(event.currentTarget.value);
    if (event.key === "Escape") handleReset();
  };

  const showCloseButton = () => {
    switch (value) {
      case null:
        return false;
      case "":
        return false;

      default:
        return true;
    }
  };


  const inputProps: SearchInputProps = {value,onChange:handleChange,onKeyDown:handleKeyDown }

  return {
    inputProps,
    handleReset,
    value,
    setValue,
    handleSearch,
    handleChange,
    handleKeyDown,
    showCloseButton
  };
}

export default useSearch;
