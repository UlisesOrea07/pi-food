const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize')
const router = require('express').Router();
const fetch = require('node-fetch');
const checkKey = require('../utils/checkApiKeys')
const URL = 'https://api.spoonacular.com/recipes/'
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7, API_KEY8, API_KEY9 } = process.env;
const keys = [API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7, API_KEY8, API_KEY9];
//https://api.spoonacular.com/recipes/complexSearch?apiKey=d18d943ce8944e3d8e6354cc5c759233&number=100
//https://api.spoonacular.com/recipes/1/information?apiKey=d18d943ce8944e3d8e6354cc5c759233

//unicos endpoints/flagas para utilizar (GET)
//&addRecipeInformation=true
//https://api.spoonacular.com/recipes/{id}/information
// https://api.spoonacular.com/recipes/complexSearch

router.get('/recipes', async (req, res) => {

    try {
        const keyOn = await checkKey(keys, URL, 'complexSearch');
        if (keyOn.found) {
            let resp = await fetch(`${URL}complexSearch?apiKey=${keyOn.key}&addRecipeInformation=true&number=200`)
            var datApi = await resp.json();
        } else {
            dataApi = [];
            //return res.send(keyOn.message);
        }
    } catch (eror) {
        dataApi = [];
        //res.send('Connection error')
    }
    try {
        const { name } = req.query;
        if (name) {
            const recipesMatch = datApi.results?.filter(recipe => {
                return (recipe.title.toLowerCase().includes(name.toLowerCase()))
            });
            const recipesApi = recipesMatch?.map(r => {
                return {
                    id: r.id,
                    title: r.title,
                    spoonacularScore: r.spoonacularScore,
                    healthScore: r.healthScore,
                    image: r.image,
                    diets: r.diets
                };
            })
            const recipesPg = await Recipe.findAll({
                where: {
                    title: {
                        [Op.substring]: name
                    }
                }
            });
            const recipes = [...recipesApi, ...recipesPg]
            return recipes ? res.json(recipes) : res.status(404).send('Not found');

        } else {
            const recipesApi = datApi.results?.map(recipe => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    spoonacularScore: recipe.spoonacularScore,
                    healthScore: recipe.healthScore,
                    image: recipe.image,
                    diets: recipe.diets
                };
            });
            const recipesPg = await Recipe.findAll();
            const recipes = [...recipesApi, ...recipesPg]
            return recipes ? res.json(recipes) : res.status(404).send('Not found');
        }
    } catch (error) {
        res.send('Connection error')
    }
});

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (!isNaN(id)) {
            //const resp = await fetch(`${URL}${id}/information?apiKey=${API_KEY}`)
            const keyOn = await checkKey(keys, URL, 'complexSearch')
            if (!keyOn.found) return res.send(keyOn.message)
            const resp = await fetch(`${URL}${id}/information?apiKey=${keyOn.key}`)
            const dataApi = await resp.json();
            const recipeApi = {
                id: dataApi.id,
                title: dataApi.title,
                summary: dataApi.summary,
                spoonacularScore: dataApi.spoonacularScore,
                healthScore: dataApi.healthScore,
                image: dataApi.image,
                diets: dataApi.diets,
                steps: dataApi.analyzedInstructions[0]?.steps.map(st => st.step)
                // steps: dataApi.analyzedInstructions[0] ? dataApi.analyzedInstructions[0].steps : []
            };
            return recipeApi ? res.json(recipeApi) : res.status(404).send('Not found');
        }
    } catch (error) {
        res.send(error);
    }
    try {
        let recipePg = await Recipe.findByPk(id, {
            include: [
                {
                    model: Diet,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        recipePg.diets = await recipePg.diets.map(r => r.name);
        return recipePg ? res.json(recipePg) : res.status(404).send('Not found');
    } catch (error) {
        res.send(error);
    }
});
router.get('/diets', async function (req, res) {
    try {
        let dietsPg = await Diet.findAll();
        console.log(dietsPg)
        dietsPg ? res.json(dietsPg) : res.status(404).send('Not found')
    } catch (error) {
        res.send(error);
    }

});

router.post('/recipe', async function (req, res) {
    const { title, summary, spoonacularScore, healthScore, image, steps, diets } = req.body;
    if (!title, !summary, !spoonacularScore, !healthScore, !image, !steps) return res.status(400).send('all field are needed')
    try {
        const recipe = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            image,
            steps
        });
        await recipe.addDiet(diets);
        res.status(201).json({ message: 'created', id: recipe.id });
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;