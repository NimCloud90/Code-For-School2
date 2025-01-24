const car = {
    make: 'Honda',
    model: 'Accord',
    year: 1990,
    getInfo: function() {
        console.log(`${car.make},
            ${car.model},
            ${car.year}`
        );
    }
};

car.getInfo();


const element = document.getElementById('carrrrss');
element.textContent = 'console isnt working?'
console.log(element);  