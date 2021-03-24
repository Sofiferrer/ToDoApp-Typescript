// export const objectToArray = <T>(obj: T): { 0: T[keyof T], id: keyof T }[] => {
//     const array = [];

//     for (const prop in obj) {
//         array.push({ 0: obj[prop], id: prop });
//     }

//     return array;
// };

export const objectToArray = <T>(obj: T): (T[keyof T] & {
    id: keyof T;
})[] => {
    let array = [];

    console.log(obj);

    for (const prop in obj) {
        array.push({ ...obj[prop], id: prop });
    }

    console.log(array);

    return array;
};