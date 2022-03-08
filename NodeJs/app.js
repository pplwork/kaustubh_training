const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {cats}= require("./catData.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(cats);
});

app.get("/:id", (req, res) => {
  let item = cats.find((e) => e.id == req.params.id);
  if (item === undefined) {
    res.status(404).send();
  }
  res.status(200).send(item);
});

app.post("/", (req, res) => {
  try {
    const { id, name, breed, age } = req.body;
    if (id !== undefined && name !== undefined && breed !== undefined && age !== undefined) {
      const data = { id, name, breed, age };
      cats.push(data);
      res.status(201).send("data added");
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(400).send(cats);
  }
});

app.put("/:id", (req, res) => {
  const { id, name, breed, age } = req.body;
  if (id !== undefined && name !== undefined && breed !== undefined && age !== undefined) {
      cats.map((catD) => {
      return catD.id === id
        ? ((catD.id = id),
          (catD.name = name),
          (catD.breed = breed),
          (catD.age = age))
        : null;
    });
  } else {
    res.status(400).send();
  }

  res.status(200).send();
});

app.delete("/:id", (req, res) => {
  if (cats.find((e) => e.id == req.params.id)) {
    cats = cats.filter((x) => x.id != req.params.id);
  } else {
    res.status(404).send();
  }
  res.status(200).send(`ID: ${req.params.id} deleted`);
});
app.listen(port, () => {
  console.log(`port ${port}`);
});
