//  problem------> 1
function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'your pocket is empty';
    }
    const totalSell = ticketSale * 120;
    const guardCost = 500;
    const launchCost = 8 * 50;
    const totalCost = guardCost + launchCost;
    const result = totalSell - totalCost;
    return result;
    
}


// problem-----> 2

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

// problem-----> 3

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

// problem-----> 4

function password(obj) {
    if(!obj.name||!obj.birthYear|| !obj.siteName){
      return "Invalid";
    }
    else if(obj.birthYear.toString().length !== 4){
      return "Invalid";
    }
    
     const name= obj.name;
     const birthYear= obj.birthYear;
     const siteName= obj.siteName;
     let upperSiteName= siteName.charAt(0).toUpperCase()+ siteName.slice(1);
     const pass = upperSiteName + "#" + name+ "@" + birthYear;
     return 'pass';
    }
    
    // Problem-----> 5

    function monthlySavings(arr, livingCost){

        if (!Array.isArray(arr) && typeof livingCost !== "number") {
            return "Invalid input";
        }
    
        let totalTax = 0;
        let totalIncome = 0;
        
        for (const numb of arr) {
            totalIncome += numb;
            
            if (numb >= 3000) {
                const tax = numb * 20 / 100;
                totalTax += tax;
            }
        }
        
        console.log('total income is : ' , totalIncome);
        const totalExpense = totalTax + livingCost;
        console.log('total expenses is:', totalExpense);   
    
        const savings = totalIncome - totalExpense;
    
        if(savings < 0){
            return 'earn more';
        }
        return savings;
    }
