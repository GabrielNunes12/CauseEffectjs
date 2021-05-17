const summary = document.getElementById('people').innerHTML;

const people = [
  {
    id: 1,
    name: "joseph", 
    street: "AJUd", 
    city: "ggg", 
    state: "bd", 
    country: "gh", 
    telephone: "999999", 
    birthday: "2020202"
  },
  {
    id: 2,
    name: "Mary", 
    street: "Mary", 
    city: "Mary", 
    state: "Mary", 
    country: "Mary", 
    telephone: "Mary", 
    birthday: "Mary"
  },
  {
    id: 3,
    name: "Jocker", 
    street: "AJA", 
    city: "Jocker", 
    state: "AAA", 
    country: "Jocker", 
    telephone: "Jocker", 
    birthday: "Jocker"
  }
];


const arrayPeople = people.map((value, index) => {
  return `\n${value.name} \n ${value.telephone} \n ${value.street} \n ${value.state} \n ${value.city} \n ${value.birthday}`;
})

document.getElementById('result').innerText = `${arrayPeople}`;
