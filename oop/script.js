let obj = {
    name : 'John',
    age : 40
}

obj.address = 'qsdasdasd';

let storage = [];

function Person(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
}

let p1 = new Person('Tom',20,'asdasdasd');
storage.push(p1);
let p2 = new Person('Dave',40,'xcvcvxvv');
storage.push(p2);

console.log(storage);