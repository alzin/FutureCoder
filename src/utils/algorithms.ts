// type TranslationFunction = (key: string) => string | string[];

// export const getNestedTranslation = (keyParts: string[], t: TranslationFunction): string | string[] => {
//     let value = t(keyParts.join('.'));

//     // Check if the initial value is an array. If so, handle accordingly or convert it to a string if necessary.
//     if (Array.isArray(value)) {
//         // If the initial value is an array, decide how you want to handle it. For example, join the array into a single string or handle differently.
//         // This is just an example. Adjust according to your actual requirements.
//         value = value.join(', '); // Example: joining array elements into a single string with commas.
//     }

//     // Now, proceed knowing `value` is definitely a string.
//     const parts = value.split('.');

//     for (let i = 1; i < parts.length; i++) {
//         const partialKey = parts.slice(0, i).join('.');
//         value = t(partialKey);

//         // If the partial translation doesn't contain dots, we've reached the deepest level.
//         if (!partialKey.includes('.')) break;
//     }

//     // After the loop, check again if `value` is an array (in case `t` returned an array at some point).
//     if (Array.isArray(value)) {
//         return value.map((item, index) => `${index}: ${item}`);
//     }

//     return value;
// };

type TranslationFunction = (key: string) => string | string[];
export const getNestedTranslation = (keyParts: string[], t: TranslationFunction): Record<string, any> => {
    const fullPath = keyParts.join('.');
    const value = t(fullPath);
    return value as Record<string, any>;
}; 


export const logFormDataValues = (formData: FormData) => {
    Array.from(formData.entries()).forEach(([name, value]) => {
        console.log(`Name: ${name}, Value: ${value}`);
    });
}