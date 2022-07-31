const express = require('express');
const {notesArray} = require('./db/db');
const shortid = require('shortid');
const fs = require('fs');
const path = require('path');
 

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
    const addNote = body;
    notesArray.push(body);
        fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notesArray }, null, 2)
  );
    return body;
}


//post route
app.post('/api/notes', (req, res) => {
   // req.body is where our incoming content will be
   req.body.id = shortid();

   const newNote = createNewNote(req.body, notesArray);
   res.json(newNote);
   
});

//----------------------------------------------------------------------------------------------------------
//html routes

app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, './public/notes.html'));
});

//----------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});