import { useState, useEffect } from "react";

const useStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item && item !== "undefined" && item !== "null"
        ? JSON.parse(item)
        : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  // Sync to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  const removeStorageValue = () => {
    try {
      setValue(defaultValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  const clearStorage = () => {
    try {
      localStorage.clear();
      setValue(defaultValue);
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return [value, setValue, removeStorageValue, clearStorage];
};

export default useStorage;
