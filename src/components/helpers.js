
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};
