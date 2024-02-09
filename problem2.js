function checkName(name) {

    if (typeof name !== 'string') {
        return 'invalid';
    }
    const wordList = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const words = name.charAt(name.length - 1).toLowerCase();

   
    if (wordList.includes(words)) {
        return "Good Name";
    }

    else {
        return "Bad Name";
    }

}
console.log(checkName('nahid'))

