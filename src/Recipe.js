import React from "react";
import recipeStyle from './recipe.module.css'

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className = {recipeStyle.recipe}>
            <h1>{title}</h1>
            <h2>Ingredients: </h2>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories Per Serving: {calories}</p>
            <img src = {image} alt=""/> 
        </div>
    );
}

export default Recipe;