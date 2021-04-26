// Require Libraries
require('dotenv').config();
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Set db
require('./data/reddit-db');

// App Setup
const app = express();

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());
app.use(cookieParser()); // Add this after you initialize express.

// Middleware
const exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/posts/new', (req, res) => {
    res.render('posts-new')
}); 

// Controllers
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);

// Start Server
app.listen(3000, () => {
  console.log('Reddit Clone on port localhost:3000!');
});

module.exports = app;