const Skill = require('../models/skill.js');

module.exports = {
    index,
    show,
    new: newSkill,
    create, 
    delete: deleteSkill, 
    edit, 
    update
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

function create(req, res) {
    Skill.create(req.body); // Holds the text of the new todo from the input
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.skill)
    res.render('skills/edit', { skill });
}

function update(req,res) {
    Skill.update(req.params.skill, req.body);
    res.redirect(`/skills/${req.params.skill}`)
}