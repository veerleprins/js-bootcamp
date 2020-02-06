const car = {
    color: 'red',
    year: '1995',
    type: 'Seat',
    greeting: function () {
        return 'Hi Seat!';
    }
}

console.log(car);
console.log(car.color);

car.color = 'blue';
console.log(car.color);
console.log(car.greeting());


// Local en Global scope
// ';' ja je kan het weglaten, 
// maar liever laten staan.