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