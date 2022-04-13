const Skill = require('../models/skill.js');

module.exports = {
    index,
    show,
    new: newSkill
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills }); //second argument must always be an object
}

function show(req, res) {
    const skill = Skill.getOne(req.params.skill)
    res.render('skills/show', { skill });
}

function newSkill(req, res) {
    res.render('skills/new');
}