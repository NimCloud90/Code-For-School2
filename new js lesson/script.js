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

const button = document.getElementById('carrrrss');
button.addEventListener('click', function() {
    element.style.color = 'red';
}
);

const paragraph = document.getElementById('this');
paragraph.addEventListener('click', function() {
    paragraph.textContent = 'the pigeons in Times Square have been replaced by robots'
}
);