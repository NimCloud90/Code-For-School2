const person = {
    name: 'Jane',
    age: 30,
    greet: function*() {
    console.log
    ('Hello');
    }
};

person.name = 'Alice'
person['age'] = 25;
console.log(person.name,
person.age);