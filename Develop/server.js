// Create a server.js file that will serve up the application
//     - Import all your required dependencies
//     - Initialize the Express app
const express = require('express');
//     - Set up the port that your server will listen on (NOTE: Heroku will set this up for you when you deploy)
const app = express();
const PORT = process.env.PORT || 3000;
//     - Set body parsing, static middleware, route middleware
app.use(middleware);
//     - Start the server

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//     - Create a "GET" route for `/notes` that returns the `notes.html` file
app.get('/notes', (req, res)) => res.json();

//     - Create a GET route for `*` that returns `index.html` file
app.get('*'(req, res)) => res.json();

//     - Create a GET route for `/api/notes` that returns all saved notes as JSON
app.get('/api/notes', (req,vres)) => res.json('GET notes');

//     - Create a POST route for `api/notes` that saves a new note to the db.json file
app.post ('/api/notes',(req,res)) => res.json();


app.listen(PORT, () => console.log(`Listening on PORT: PORT`));


// 4. Create helper functions that manage saving and retrieving notes from the db.json file
//     -Create a getNotes() function that returns all the saved notes from the db.json file
//     -Create a saveNote() function that saves a new note to the db.json file and returns the new note as JSON
//     -Create a deleteNote() function that deletes a note from the db.json file and returns a success message (bonus)

// 5. Integrate your helper functions into the routes

// 6. Test the routes the ensure that they're working