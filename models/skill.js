const skills = [
    {id: 125223, skill: 'Javascript', level: 'Beginner'},
    {id: 454324, skill: 'Python', level: 'Intermediate'},
    {id: 984521, skill: 'CSS', level: 'Beginner'},
    {id: 094323, skill: 'Shining Shoes', level: "I don't shine shoes no more"}
  ];
  

  module.exports = {
    getAll, 
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(skill) {
    return skills.find(s => s.skill === skill)
  }

 