class Car {
    constructor(
        public make : string,
        public model : string,
        public year : number
    ) {}
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const year = currentYear - this.year ;
        const name = `${year} (assuming current year is ${currentYear})`;
        return name;
    }
}


// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
console.log(car.getCarAge())
// Sample Output 1:
// 6 (assuming current year is 2024)