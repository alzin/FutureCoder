interface LocalStorageHook {
  getValueAsStr: (key: string) => string;
  getValueAsOpj: (key: string) => TimezoneOption | null |Object;
  setValue: (key: string, value: string, type?: string) => void;
  clearAll: () => void;
}

const useLocalStorage = (): LocalStorageHook => {

  const getValueAsStr = (key: string): string => {

    if (typeof window !== "undefined") {
      const value = window.localStorage.getItem(key);
      return value ?? "";
    }
    return ""
  };

  const getValueAsOpj = (key: string): TimezoneOption | null | Object => {

    if (typeof window !== "undefined") {
      const value: any = window.localStorage.getItem(key);
      return JSON.parse(value) ?? null;
    }
    return null
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

  return { getValueAsStr, getValueAsOpj, setValue, clearAll };

};

export default useLocalStorage;