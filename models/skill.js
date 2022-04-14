const req = require("../controllers/skills");

const skills = [
    {id: 125223, skill: 'Javascript', level: 'Beginner'},
    {id: 454324, skill: 'Python', level: 'Intermediate'},
    {id: 984521, skill: 'CSS', level: 'Beginner'},
    {id: 094323, skill: 'Shining Shoes', level: "I don't shine shoes no more"}
  ];
  

  module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne, 
    update
  };
  
  function getAll() {
    return skills;
  }

  function getOne(skill) {
    return skills.find(s => s.skill === skill)
  }

  function create(skill) {
    console.log(skill)
    skill.id = Date.now() % 1000000;
    // skill.level = level;
    skills.push(skill);
  }

  function deleteOne(id) {
    let newId = parseInt(id)
    skills.splice(skills.findIndex((skill) => skill.id === newId), 1);
  }

  function update(skill, body) {
    let s = skills.findIndex(s => s.skill === skill);
    skills[s].skill = body.skill;
    skills[s].level = body.level;
    }

 



 