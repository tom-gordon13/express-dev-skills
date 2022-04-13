var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */

router.get('/', skillsCtrl.index);

router.get('/:skill', skillsCtrl.show)

module.exports = router;




