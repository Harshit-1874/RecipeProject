const express = require('express');
const { getAllRecipes, getRecipeById } = require('../controllers/recipeController');
const router = express.Router();

router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);

module.exports = router;
