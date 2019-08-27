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


let Cars = (props) => {
    return (
        <div className="car">
            <div className="car-img">
                <img src={props.img} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>{props.year}</p>
            <p>{props.price}</p>
        </div>
    )
};


export {cars, Cars};
