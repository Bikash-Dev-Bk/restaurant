import React from 'react';
import './Category.css';
import Coffee from './Coffee/Coffee';
import Drinks from './Drinks/Drinks';
import Food from './Food/Food';


const Category = () => {
    return (
        <div className='Category-Container'>
            <h2 className='Category-Title'>Our Category</h2>
            <Coffee></Coffee>
            <Food></Food>
            <Drinks></Drinks>
        </div>
    );
};

export default Category;