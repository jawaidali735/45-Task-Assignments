let createCar = (company, model, year, color, price) => {
    return {
        company,
        model,
        year,
        color,
        price,
    };
};
let car1 = createCar('BMW', 'i8', 2013, 'blue', 40000000);
let car2 = createCar('mercedes', 'c class', 2022, 'Black', 30680000);
console.log(car1, car2);
export {};
