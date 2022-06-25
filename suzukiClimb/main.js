//create a function that returns the twenty year estimate of the 
//stairs climbed using this formula:


//20 year estimate == one year total * 20


function stairsIn20(stairs){
    let total = 0;
    for(value of stairs){
        for(num of value){
            total += num;
        }
    }
    return total *= 20
}