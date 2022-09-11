import { useState } from "react";

function useLocalStorage(key, initialValue) {
  let todos = JSON.parse(localStorage.getItem(key)) ?? initialValue;
  const [localStorageValue, setLocalStorageV] = useState(todos);
  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    setLocalStorageV(value);

    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

export default useLocalStorage;
