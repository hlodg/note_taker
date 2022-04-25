// Create a server.js file that will serve up the application
//     - Import all your required dependencies
//     - Initialize the Express app
const { DESTRUCTION } = require('dns');
const fs = require("fs");
const express = require('express');
// const db = require("db/db.json")
//     - Set up the port that your server will listen on (NOTE: Heroku will set this up for you when you deploy)
const app = express();
const path = require('path');
const { response } = require('express');
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
//     - Set body parsing, static middleware, route middleware
//     - Start the server

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//     - Create a "GET" route for `/notes` that returns the `notes.html` file
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

//     - Create a GET route for `*` that returns `index.html` file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

//     - Create a GET route for `/api/notes` that returns all saved notes as JSON
app.get('/api/notes', (req,res) => {
    var data = JSON.parse(fs.readFileSync('./db/db.json', "utf8"))
    res.json(data)
});

//     - Create a POST route for `api/notes` that saves a new note to the db.json file
app.post ('/api/notes',(req,res) => {
    try {
        var info = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
        var id = uuidv4()
        req.body.id = id
        info.push(req.body)
        fs.writeFileSync('./db/db.json', JSON.stringify(info))
        res.json(info)
    } catch (error) {
        res.json(error)
    }
});

app.delete ('/api/notes/:id', (req,res) => {
    try {
        var info= JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
        info.filter((note)=>{
            console.log(note.id)
            console.log(req.params.id)
            if (note.id==req.params.id){
                return true
            }else{
                return false
            }
        })
        console.log(info)
    } catch (error) {
        
    }
    
   
});

app.get('*',(req, res) => res.json('index.html'));


app.listen(PORT, () => console.log(`Listening on PORT: PORT`));


// 4. Create helper functions that manage saving and retrieving notes from the db.json file
//     -Create a getNotes() function that returns all the saved notes from the db.json file
// function getNotes() { fs.readFile('./db/db.json', "utf8")
//     .then((notes)=> res.JSON(notes))
// };

//     -Create a saveNote() function that saves a new note to the db.json file and returns the new note as JSON
// const fileData = JSON.parse(fs.readFileSync('./db/db.json'))
// fileData.push(newData)

// function saveNote(newData) { 
//     fs.writeFileSync('./db/db.json', JSON.stringify(fileData, null, 2))
// };


// 5. Integrate your helper functions into the routes

// 6. Test the routes the ensure that they're working