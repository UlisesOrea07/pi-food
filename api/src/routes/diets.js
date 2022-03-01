const { Diet } = require('../db');
const router = require('express').Router();


router.get('/diets', async (req, res) => {
    const diets = await Diet.findAll();
    res.json(diets);
});
module.exports = router;