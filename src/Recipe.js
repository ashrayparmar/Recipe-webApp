import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{calories}</h2>
            <img src={image} alt="img"></img>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
        </div>
    );
}

export default Recipe;