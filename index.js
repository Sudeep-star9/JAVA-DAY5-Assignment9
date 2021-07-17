let cars='Astonmartin,Bmw,Mustang,Mazda';
let positon=cars.substr(12,3);
console.log(positon);

//both negative parameter cannot accept but if we removed second parameter,substr accept it
let car='Astonmartin,Bmw,Mustang,Mazda';
let pos=car.substr(-14,-7);
console.log(pos);