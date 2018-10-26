import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'script!jquery';
import 'script!bootstrap/dist/js/bootstrap.js';

let cars = require('./myModule');


let car1 = new cars.Car(cars);
console.log(car1);