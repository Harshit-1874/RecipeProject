const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cookingTime: { type: String, required: true },
    serves: { type: Number, required: true },
    category: { type: String, required: true },
    recipeDescription: { type: String, required: true },
    image: { type: String, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
