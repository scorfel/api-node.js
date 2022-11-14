var express = require('express');
const app = express();
var router = express.Router();
const { createOneCentre, createOnePrevention, createOneActualite } = require('../controllers/postControllers.js');

router.post('/create-centre', createOneCentre)
router.post('/create-prevention', createOnePrevention)
router.post('/create-actualite', createOneActualite)

module.exports = router;