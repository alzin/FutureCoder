// import translate from "translate";
// translate.engine = "deepl";
// translate.key = process.env.DEEPL_KEY;

// export const translator = async (text: string, to: string) => {
//     const res = await translate(text, to);
//     console.log(res);
// }

export const logFormDataValues = (formData: FormData) => {
    Array.from(formData.entries()).forEach(([name, value]) => {
        console.log(`Name: ${name}, Value: ${value}`);
    });
}