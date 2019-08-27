import React from 'react';
import './App.css';


let Car = (props) => {
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

export default Car;
