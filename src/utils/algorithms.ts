export const logFormDataValues = (formData: FormData) => {
    Array.from(formData.entries()).forEach(([name, value]) => {
        console.log(`Name: ${name}, Value: ${value}`);
    });
}