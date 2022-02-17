const router = require('express').Router();
const recipesRouter = require('./recipes');
const typesRouter = require('./types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(recipesRouter);
router.use(typesRouter);


module.exports = router;
