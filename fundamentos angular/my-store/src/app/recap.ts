const username = 'tourdy';

const sum = (a:number, b:number) =>  {
    return a + b
};

sum(2,3);

class Person {
    age: number;
    lastname: string;

    constructor(age: number, lastname: string) {
        this.age = age;
        this.lastname = lastname;
    }
}

const jaime = new Person(12,'Arango');