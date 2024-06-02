import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes/${id}`)
            .then(res => {
                setRecipe(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.category}</p>
            <p>{recipe.cookingTime}</p>
            <p>{recipe.serves}</p>
            <p>{recipe.recipeDescription}</p>
            <img src={recipe.image} alt={recipe.name} />
        </div>
    );
};

export default RecipeDetail;
