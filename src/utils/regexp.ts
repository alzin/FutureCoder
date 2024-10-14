// Email validation regex
export const isEmail = (value: string | undefined) => !!value?.match(/^\S+@\S+\.\S+$/);

// Number validation regex
export const isNumber = (value: string) => !isNaN(Number(value));

// Non-empty value validation regex
export const isEmpty = (value: string | undefined) => {
    if (value === "") return true
    return false
};