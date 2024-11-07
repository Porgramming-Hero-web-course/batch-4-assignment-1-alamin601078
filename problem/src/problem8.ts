
function validateKeys<T>(obj: T, keys: (keyof T)[]){
 for(const key of keys){
    if(!(key in obj)) {
        return false;
    }
 }
 return true;
}


// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age","email"]));

// Sample Output:
// true