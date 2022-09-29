import React from 'react';
import './Person.css';

const Person = () => {
    return (
        <div className='person-info'>
            <div>
                <p>55<sub>kg</sub></p>
                <p className='person-mete'>Weight</p>
            </div>
            <div>
                <p>5.3</p>
                <p className='person-mete'>Height</p>
            </div>
            <div>
                <p>25<small>yrs</small></p>
                <p className='person-mete'>Age</p>
            </div>
        </div>
    );
};

export default Person;