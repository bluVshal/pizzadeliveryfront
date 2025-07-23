import React from 'react';
import labels from '../../labels.json';

const Pizzas = (props) => {
    const { pizza } = props;

    return (
        <div>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{ height: '10vw', width: '16vh' }} />
            <div className='flex-container'>
                <div className='w-100'>
                    <p>{labels.variants}</p>
                    <select id="pizza-variant">
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100'>
                    <p>{labels.prices}</p>
                </div>
            </div>
        </div>
    )
};

export default Pizzas;
