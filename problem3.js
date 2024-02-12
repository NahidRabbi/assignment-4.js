// Problem 3
function deleteInvalids(array){
    if (!Array.isArray(array)) {
        return 'Put valid array';
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array [i] === 'number' && !isNaN(array [i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));

