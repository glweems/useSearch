import React from "react";
export declare type SearchInputProps = Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value" | "onChange" | "onKeyDown" | "placeholder">;
export declare type SearchButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface UseSearchOptions {
    throttle?: number;
    debounce?: number;
}
declare function useSearch(param?: string, options?: UseSearchOptions): {
    inputProps: Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value" | "onChange" | "onKeyDown" | "placeholder">;
    buttonProps: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    handleReset: () => void;
    value: string;
};
export default useSearch;
