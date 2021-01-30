import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>Calories: {calories}</h2>
            <img src={image} alt="img"></img>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
        </div>
    );
}

export default Recipe;