
function removeDuplicates(num :number[]):number[]{
    const seen= new Set<number>();
    const result: number[]=[];

    for(const numb of num){
        if(!seen.has(numb)){
            seen.add(numb)
            result.push(numb)
        }
    }

    return result;
}


const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);

console.log(newArray); 