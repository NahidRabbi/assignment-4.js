// Problem 3
function deleteInvalids(array){
    if (!Array.isArray(array)) {
        return 'Put valid array';
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof item === 'number' && !isNaN(item)) {
            newArray.push(item);
        }
    }

    return newArray;
}
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
