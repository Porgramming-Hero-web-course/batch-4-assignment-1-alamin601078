function getProperty<T,k extends keyof T>(obj:T , key:k){
    return obj[key];
}


// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
// Alice;