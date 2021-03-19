type Obj = {
    props: {},
}

export const objectToArray = (obj: Obj) => {
    const array: [] = [];

    for (const prop in obj) {
        //array.push({ ...obj[prop], id: prop });
    }

    return array;
};