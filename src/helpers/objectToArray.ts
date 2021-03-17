export const objectToArray = (obj) => {
    const array = [];

    for (const prop in obj) {
        array.push({ ...obj[prop], id: prop });
    }

    return array;
};