const { Recipe, Type } = require('../db');
const router = require('express').Router();


//https://api.spoonacular.com/recipes/complexSearch?apiKey=d18d943ce8944e3d8e6354cc5c759233&number=100
//https://api.spoonacular.com/recipes/1/information?apiKey=d18d943ce8944e3d8e6354cc5c759233
// router.get('/recipes?name=', async (req, res) => {

// });

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByPk(id, {
        include: Type
    });
    return recipe ? res.json(recipe) : res.status(404).send('Error');
});

router.post('/recipe', async function (req, res) {

    const { nombre, resumen, puntuacion, nivel, pasos, types } = req.body;
    const recipe = await Recipe.create({
        nombre,
        resumen,
        puntuacion,
        nivel,
        pasos
    });
    await recipe.addType(types);
    res.send('se agregó')
});

module.exports = router;