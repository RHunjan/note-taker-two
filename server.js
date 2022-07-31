const express = require('express');
const {notesArray} = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
 

//get route

app.get('/api/notes', (req, res) => {
  res.json(notesArray);
});


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});