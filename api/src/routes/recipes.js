const { Recipe, Type } = require('../db');
const { Op } = require('sequelize')
const router = require('express').Router();
const fetch = require('node-fetch');
const URL = 'https://api.spoonacular.com/recipes/'
const { API_KEY, SECAPI_KEY, TERAPI_KEY, SECTAPI_KEY, OCTAPI_KEY } = process.env;
//https://api.spoonacular.com/recipes/complexSearch?apiKey=d18d943ce8944e3d8e6354cc5c759233&number=100
//https://api.spoonacular.com/recipes/1/information?apiKey=d18d943ce8944e3d8e6354cc5c759233

//unicos endpoints/flagas para utilizar (GET)
//&addRecipeInformation=true
//https://api.spoonacular.com/recipes/{id}/information
// https://api.spoonacular.com/recipes/complexSearch

router.get('/recipes', async (req, res) => {
    try {
        const resp = await fetch(`${URL}complexSearch?apiKey=${SECTAPI_KEY}&addRecipeInformation=true&number=5000`)
        var datApi = await resp.json();
    } catch (error) {
        res.send('External conection error')
    }
    try {
        const { name } = req.query;
        let recipesApi = [];
        let recipesPg = [];
        if (name) {
            const recipesMatch = datApi.results?.filter(recipe => {
                return (recipe.title.toLowerCase().includes(name.toLowerCase()))
            });
            recipesApi = recipesMatch?.map(r => {
                return {
                    id: r.id,
                    title: r.title,
                    spoonacularScore: r.spoonacularScore,
                    healthScore: r.healthScore,
                    image: r.image,
                    imageType: r.imageType,
                    diets: r.diets
                };
            })
            recipesPg = await Recipe.findAll({
                where: {
                    title: {
                        [Op.substring]: name
                    }
                }
            });
        } else {
            recipesApi = datApi.results?.map(recipe => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    spoonacularScore: recipe.spoonacularScore,
                    healthScore: recipe.healthScore,
                    image: recipe.image,
                    imageType: recipe.imageType,
                    diets: recipe.diets
                };
            });
            recipesPg = await Recipe.findAll();
        }
        const recipes = [...recipesApi, ...recipesPg]
        return recipes ? res.json(recipes) : res.status(404).send('Error');

    } catch (error) {
        res.send(error)
    }
});

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;

    if (!isNaN(id)) {
        const resp = await fetch(`${URL}${id}/information?apiKey=${API_KEY}`)
        const dataApi = await resp.json();
        const recipeApi = {
            id: dataApi.id,
            title: dataApi.title,
            summary: dataApi.summary,
            spoonacularScore: dataApi.spoonacularScore,
            healthScore: dataApi.healthScore,
            image: dataApi.image,
            imageType: dataApi.imageType,
            diets: dataApi.diets,
            steps: dataApi.steps
        };
        return recipeApi ? res.json(recipeApi) : res.status(404).send('Error');
    }
    const recipePg = await Recipe.findByPk(id, {
        include: Type
    });
    return recipePg ? res.json(recipePg) : res.status(404).send('Error gghgfhf');
});

router.post('/recipe', async function (req, res) {
    const { title, summary, spoonacularScore, healthScore, steps, types } = req.body;
    const recipe = await Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps
    });
    await recipe.addType(types);
    res.send('se agregó');
});

module.exports = router;