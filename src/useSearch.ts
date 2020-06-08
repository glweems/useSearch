// Generated with util/create-component.js
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
import capitalize from "lodash/capitalize";
export type SearchInputProps = Pick<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "value" | "onChange" | "onKeyDown" | "placeholder"
>;

export type SearchButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface UseSearchOptions {
  throttle?: number;
  debounce?: number;
}

function useSearch(
  param = "search",
  options: UseSearchOptions = { debounce: 1300, throttle: 500 }
) {
  const { pathname } = useLocation();
  const history = useHistory();

  const [state, setState] = React.useState(
    new URLSearchParams(window.location.search).get(param) ?? ""
  );

  const handleReset = () => {
    setState("");
    history.replace(pathname);
  };

  const handleSearch = useCallback(
    debounce((value: string) => {
      if (value === "") history.push(pathname);

      history.replace(
        qs.stringifyUrl({
          url: pathname,
          query: { [param]: value },
        })
      );
    }, options.debounce),
    []
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.value === "") {
      handleReset();
    } else {
      setState(event.currentTarget.value);
      handleSearch(event.currentTarget.value);
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") handleSearch(event.currentTarget.value);
    if (event.key === "Escape") handleReset();
  };

  const inputProps: SearchInputProps = {
    value: state,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: capitalize(param),
  };

  const buttonProps: SearchButtonProps = {
    onClick: handleReset,
    disabled: state === "",
  };

  return {
    inputProps,
    buttonProps,
    handleReset,
    value: state,
  };
}

export default useSearch;
