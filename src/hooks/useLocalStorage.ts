interface LocalStorageHook {
  getValue: (key: string) => string;
  setValue: (key: string, value: string) => void;
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

  const setValue = (key: string, value: string): void => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
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