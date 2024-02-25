import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, default_value) {
  const [theme, setTheme] = useState(() => {
    let currentValue;

    try {
      currentValue = localStorage.getItem(key) || default_value;
    } catch (err) {
      currentValue = default_value;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, theme);
  }, [key, theme]);
  return [theme, setTheme];
}
