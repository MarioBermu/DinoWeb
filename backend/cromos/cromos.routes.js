
const Cromos = require('./cromos.controller');
const routes = require('express').Router();

module.exports = (router) => {
router.get('/cromos', Cromos.getCromo);
}

