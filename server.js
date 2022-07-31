const express = require('express');
const {notesArray} = require('./db/db');
const shortid = require('shortid');

console.log(shortid());

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
 
//--------------------------------------------------------------------------------------------------------
//API Routes
//get route

app.get('/api/notes', (req, res) => {
  res.json(notesArray);
});

//function to create new note
function createNewNote(body,notesArray){
    console.log(body);

    return body;
}

//post route
app.post('/api/notes', (req, res) => {
   // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});


//----------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});