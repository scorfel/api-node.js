var express = require('express');
var router = express.Router();
const { updateOneCentre, updateOnePrevention, updateOneActualite } = require('../controllers/updateControllers.js');

router.put('/update-centre', updateOneCentre)
router.put('/update-prevention', updateOnePrevention)
router.put('/update-actualite', updateOneActualite)

module.exports = router;