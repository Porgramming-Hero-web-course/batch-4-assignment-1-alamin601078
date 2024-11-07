function countWordOccurrences(sentence:string, word:string):number{
    const lowerCaceSentence = sentence.toLowerCase();
    const lowerCaceWord = word.toLowerCase();
    const words = lowerCaceSentence.replace(/[^\w\s]/g, '').split(/\s+/);

    const count :number = words.filter(w => w === lowerCaceWord).length;
 
    return count;
};



// Sample Input:
// const output = countWordOccurrences("Type£Script is great. typescript@ I love TypeScript ! typescript", "typescript");
const output = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
console.log(output);
// Sample Output:
// 2;