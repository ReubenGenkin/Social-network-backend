const router = require('express').Router();
const userRoutes = require('./user-routes');
//const pizzaRoutes = require('./thoughts-routes');

router.use('/user', userRoutes);
//router.use('/pizzas', pizzaRoutes);

module.exports = router;
