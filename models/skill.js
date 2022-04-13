const skills = [
    {id: 125223, skill: 'Javascript', level: 'beginner'},
    {id: 454324, skill: 'Python', level: 'intermediate'},
    {id: 984521, skill: 'CSS', level: 'beginner'},
    {id: 094323, skill: 'Swimming', level: 'Expert'}
  ];
  

  module.exports = {
    getAll, 
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(skill) {
    return skills.find(skill => skill.skill === parseInt(skill))
  }