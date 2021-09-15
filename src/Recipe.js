import React from "react";
import style from './recipe.module.css'


// Our receipt which will be rendered in App.js
// By adding {style.someText}, we use module styles for our elements
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient, index) => {
                    return <li className={style.li} key={index.toString()}>{ingredient.text}</li>
                })}
            </ul>
            <p className={style.calories}>Calories: {Math.round(calories)}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;