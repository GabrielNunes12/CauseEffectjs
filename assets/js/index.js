const summary = document.getElementById('people').innerHTML;

const people = {
  name: "Joao", 
  street: "joaooa", 
  city: "joaooa", 
  state: "joaooa", 
  country: "joaooa", 
  telephone: "joaooa", 
  birthday: "joaooa"
};

document.getElementById('result').innerHTML = `Name: ${people.name} 
                                               His birthday: ${people.birthday}
                                               City: ${people.city} 
                                               country: ${people.country}
                                               State: ${people.state}
                                               Street: ${people.street}`;
