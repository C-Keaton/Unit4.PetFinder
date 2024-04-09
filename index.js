const express = require('express'); 
const app = express();

const pets = [
  { name: 'Frieren', owner: 'Grant'}, 
  { name: 'Bartholomew', owner: 'Kuron'},
  { name: 'Gary', owner: 'SpongeBob' }
]


app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
});

app.get('/api/v1/pets/owner', (req, res) => {
  let foundPetOwner = pets;

  if(req.query.owner) {
    foundPetOwner = pets.filter((petOwner) => {
      return petOwner.owner === req.query.owner;
    })
  }

  res.send(foundPetOwner);
})

app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;
  const foundPetName = pets.find((myPet) => {
    return myPet.name === name
  })
  res.send(foundPetName)
});





const PORT = 8080;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });  

//This part I dont know yet
app.get('/', (req, res) => { res.sendFile('./index.html'); }); 
