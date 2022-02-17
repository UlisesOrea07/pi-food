const { Type } = require('../db');
const router = require('express').Router();


router.get('/types', async (req, res) => {
    const types = await Type.findAll();
    res.json(types);
});
module.exports = router;