var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */

router.get('/', skillsCtrl.index);

// GET /skills/new (new functionality) 
router.get('/new', skillsCtrl.new);

router.get('/:skill', skillsCtrl.show);

router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

// GET /skills/:id/edit
router.get('/:skill/edit', skillsCtrl.edit);

router.put('/:skill', skillsCtrl.update);

module.exports = router;




