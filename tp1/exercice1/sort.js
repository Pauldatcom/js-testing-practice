export function sort(array) {
    return array.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[i + 1])
        {
            let tmp = array[i];
            array[i] = array[j];
            array[i + 1 ] = tmp;
        }
    }
    }
    return result;
}