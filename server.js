const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("build"))

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "electric ⚡️",
    level: 99,
    
  }
]

app.get("/api/pokemons", (req, res) => {
  res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  data.id = pokemons.length+1
  pokemons.push(data)
  res.send(data)
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
