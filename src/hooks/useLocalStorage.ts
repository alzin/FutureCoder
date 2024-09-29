interface LocalStorageHook {
  getValue: (key: string) => string;
  setValue: (key: string, value: string, type?: string) => void;
  clearAll: () => void;
}

const useLocalStorage = (): LocalStorageHook => {

  const getValue = (key: string): string => {

    if (typeof window !== "undefined") {
      const value = window.localStorage.getItem(key);
      return value ?? "";
    }
    return ""
  };

  const setValue = (key: string, value: string, type: string = "string"): void => {
    if (typeof window !== "undefined") {
      if (type === "string")
        window.localStorage.setItem(key, value);
      else
        window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clearAll = (): void => {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
  };

  return { getValue, setValue, clearAll };

};

export default useLocalStorage;