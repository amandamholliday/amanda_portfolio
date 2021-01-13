if (process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}; // <= Heroku

//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
show('im cool')
const Fun = require('./models/funstuff.js');


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000; // <== Heroku


//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;



// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});


//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//___________________
// Routes
//___________________

// HOME =================================
app.get('/home' , (req, res) => {
    Fun.find({}, (err, allFun) => {
        if(!err){
            console.log(allFun);
            res.render('Home', {
                funstuff: allFun
            })
        } else {
            res.send(err)
        }
    })
});

// INDEX ================================
app.get('/fun', (req, res) => {
    Fun.find({}, (err, allFun) => {
        if(!err){
            console.log(allFun);
            res.render('Show', {
                funstuff: allFun
            })
        } else {
            res.send(err)
        }
    })
})

// NEW ===================================
app.get('/fun/new', (req, res) => {
    res.render('New');
})

// ABOUT =================================
app.get('/about', (req, res) => {
    res.render('About');
})

// CONTACT ===============================
app.get('/contact', (req, res) => {
    res.render('Contact');
})

// PROJECTS ==============================
app.get('/projects', (req, res) => {
    res.render('Projects');
})
// DELETE ================================
app.delete('/fun/:id', (req, res) => {
    Fun.findByIdAndRemove(req.params.id, (err, foundFun) => {
        if(!err){
            res.redirect('/fun')
        } else {
            res.send(err);
        }
    })
})

// UPDATE ===============================
app.put('/fun/:id', (req, res) => {
    Fun.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFun) => {
        if(!err){
            res.redirect('/fun/');
        } else {
            res.send(err);
        }
    })
})

// CREATE ============================
app.post('/home', (req, res) => {
    Fun.create(req.body, (err, createdFun) => {
        if(!err){
            res.redirect('/home')
        } else {
            res.send(err);
        }
    })
})

// EDIT ==============================
app.get('/fun/:id/edit', (req, res) => {
    Fun.findById(req.params.id, (err, foundFun) => {
        if(!err){
            res.render('Edit', {
                fun: foundFun
            })
        } else {
            res.send(err);
        }
    })
})

// SHOW ==============================
app.get('/fun/:id', (req, res) => {
    Fun.findById(req.params.id, (err, foundFun) => {
        if(!err){
            res.render('Show', {
                fun: foundFun
            })
        } else {
            res.send(err);
        }
    })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));