var express = require('express');
var router = express.Router();
const { deleteOneCentre, deleteOnePrevention, deleteOneActualite } = require('../controllers/deleteControllers.js');

router.delete('/delete-centre/:id', deleteOneCentre)
router.delete('/delete-prevention/:id', deleteOnePrevention)
router.delete('/delete-actualite/:id', deleteOneActualite)


module.exports = router;