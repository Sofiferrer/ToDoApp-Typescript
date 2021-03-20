export const objectToArray = <T>(obj: T): { 0: T[keyof T], id: keyof T }[] => {
    const array = [];

    for (const prop in obj) {
        array.push({ 0: obj[prop], id: prop });
    }

    return array;
};