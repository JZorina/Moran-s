import React from 'react';
import './Card.css';
import  { Images }  from '../../theme';
const Card = () => {
    return (
        <div className="card">
            <img src={Images.item} alt="jewerly item" className="card-image"/>
            <div className="container">
                <h3> aaaaaa <span className="price">24.99$</span></h3>
                <p>dddddddddddddddddddddddddddd</p>
            </div>
        </div>
    );
}

export default Card;