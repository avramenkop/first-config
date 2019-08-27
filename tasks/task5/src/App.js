import React from 'react';
import {cars, Cars} from './Cars';

let App = cars
    .map(car => <Cars name={car.name} year={car.year} price={car.price} img={car.img} /> );


export default App;
