var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */

router.get('/', skillsCtrl.index);

// GET /skills/new (new functionality) 
router.get('/new', skillsCtrl.new);

router.get('/:skill', skillsCtrl.show)

module.exports = router;




