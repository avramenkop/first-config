import React from 'react';
import './App.css';

let cars = [
  {
    name: 'BMW M3', year: 2010, price: '25000$',
    img: 'https://img4.automoto.ua/overview/BMW-M3-2018-1c8-huge-1183.jpg'
  },
  {
    name: 'Audi TT', year: 2015, price: '30000$',
    img: 'https://i.infocar.ua/i/12/5742/1200x630.jpg'
  },
  {
    name: 'Mercedes', year: 2019, price: '100000$',
    img: 'https://img.drive.ru/i/0/5b9f6f6aec05c4dd08000011.jpg'
  }
];


function Cars (props) {
    return (
        <div className="card">
          <div className="img">
            <img src={props.car.img} alt={props.car.name} />
          </div>
          <h3>{props.car.name}</h3>
          <p>{props.car.year}</p>
          <p>{props.car.price}</p>
        </div>
    )
}

const App = (
    <div className="cars">
        <Cars car={{name: cars[0].name, year: cars[0].year, price: cars[0].price,
            img: cars[0].img}} />
        <Cars car={{name: cars[1].name, year: cars[1].year, price: cars[1].price,
            img: cars[1].img}} />
        <Cars car={{name: cars[2].name, year: cars[2].year, price: cars[2].price,
            img: cars[2].img}} />
    </div>
);


export default App;
