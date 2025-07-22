import React from 'react'
import pizzas from '../../pizzas';
import Pizzas from '../../components/pizzas';

const Nuhome = () => {
    return (
        <div>
            <div className='row'>
                {pizzas.map(pizza => {
                    return (
                        <div className='col-md-4'>
                            <div>
                                <Pizzas pizza={pizza}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Nuhome
