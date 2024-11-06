function sumArray(numbers :number[]):number {
    let total = 0;
    for(let num of numbers){
        total += num
    }
    return total;
}


// Sample Input:
const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum)