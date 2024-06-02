import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RecipeList extends Component {
    state = {
        recipes: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/recipes')
            .then(res => {
                this.setState({ recipes: res.data });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <ul>
                    {this.state.recipes.map(recipe => (
                        <li key={recipe._id}>
                            <Link to={`/details/${recipe._id}`}>
                                <h3>{recipe.name}</h3>
                                <p>{recipe.category}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RecipeList;
