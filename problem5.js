
function monthlySavings(arr, livingCost) {

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

console.log(monthlySavings([ 900 , 2700 , 3400],100));