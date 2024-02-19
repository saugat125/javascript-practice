function vehicle(name,engine){
    this.name = name;
    this.engine = engine;
}

let v1 = new vehicle('ninja','1000cc');
let v2 = new vehicle('hayabusa','1400cc');

console.log(v1.name);
console.log(v2);
console.log(v2.engine);
