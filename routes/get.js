var express = require('express');
const app = express();
var router = express.Router();
const { getAllCentres, getAllPrevention, getAllActualites, getOneCentres, getOnePrevention, getOneActualites } = require('../controllers/getControllers.js');

router.get('/centres', getAllCentres)
router.get('/centres/:id', getOneCentres)
router.get('/preventions', getAllPrevention)
router.get('/preventions/:id', getOnePrevention)
router.get('/actualites', getAllActualites)
router.get('/actualites/:id', getOneActualites)

module.exports = router;