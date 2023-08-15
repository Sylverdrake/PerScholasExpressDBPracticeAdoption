//Requirements =================
const methodOverride = require('method-override');
const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const Dogs = require("./models/dogs.js");
const dogs = require("./utilities/dogsData")
const Cats = require("./models/cats.js");
const cats = require("./utilities/catsData")
//=================

//MiddleWare =================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/css'))
//

//Routing Check =================
app.use((req, res, next) => 
{
console.log("I run for all routes");
next();
});
// =================

//Mongoose Connection =================
mongoose.connect(process.env.MONGO_URI, 
{
useNewUrlParser: true,
useUnifiedTopology: true,
});

mongoose.connection.once("open", () => 
{
console.log("Connected to mongo");
});
// =================

//Seed Routes
// app.get('/cats/seed', async (req, res) =>
// {
//     await Cats.deleteMany({});
//     await Cats.create(cats);
//     res.redirect('/cats')
// })

// app.get('/dogs/seed', async (req, res) =>
// {
//     await Dogs.deleteMany({});
//     await Dogs.create(dogs);
//     res.redirect('/dogs')
// })
//=================


//Routes =================
app.get("/", (req, res) => 
{
    res.render("Home");
});

app.get("/adopt", (req, res) => 
{
    res.render("Adopt");
});

app.get("/contact", (req, res) => 
{
    res.render("Contact");
});
// =================

//Cats =================
//Cat Index (Get/Read)
app.get('/cats', (req, res) =>
{
    Cats.find({}).then((allCats) =>
    {
        res.render('Cats', 
        {
            cats: allCats,
        });
    });
});

//Post (Post/Create)
app.post("/cats", async (req, res) => 
{
    if (req.body.hadFirstCheckUp === "on")
    {
        req.body.hadFirstCheckUp = true;
    }
    else
    {
        req.body.hadFirstCheckUp = false;
    };
const newCat = await Cats.create(req.body);
// res.send(newCat);
res.redirect('/cats');
});

//New Cat 
app.get('/cats/new', (req, res)=>
{
    res.render('CatsNew');
});

//Remove Cat (DELETE/EXTERMINATE/EXTERMINATE)
app.delete('/cats/:id', async (req,res)=>
{
    await Cats.findByIdAndRemove(req.params.id)
    res.redirect('/cats')
})

//Update Cat (PutThatCatBackWhereItCameFromOrSoHelpMe/Update)
app.put('/cats/:id', async(req, res)=>
{
    if (req.body.hadFirstCheckUp === "on")
    {
        req.body.hadFirstCheckUp = true;
    }
    else
    {
        req.body.hadFirstCheckUp = false;
    };
    const updateCat = await Cats.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/cats/${req.params.id}`);
});

//Edit Cat
app.get('/cats/:id/edit', async(req, res)=>
{
    const foundCat = await Cats.findById(req.params.id)
    res.render('CatsEdit',
    {
        cats: foundCat
    })
})

//Show off the Cutie Patootie
app.get('/cats/:id', async (req, res)=>
{
    const eachCat = await Cats.findById(req.params.id)
    await res.render('CatsShow',
    {
        cats: eachCat
    })
})
//=================

//Dogs =================
//Dog Index (Get/Read)
app.get('/dogs', (req, res) =>
{
    Dogs.find({}).then((allDogs) =>
    {
        res.render('Dogs',
        {
            dogs: allDogs,
        });
    });
});

//Post (Post/Create)
app.post("/dogs", async (req, res) => 
{
    if (req.body.hadFirstCheckUp === "on")
    {
        req.body.hadFirstCheckUp = true;
    }
    else
    {
        req.body.hadFirstCheckUp = false;
    };
const newDog = await Dogs.create(req.body);
// res.send(newDog);
res.redirect('/dogs');
});

//New Dog
app.get('/dogs/new', (req, res)=>
{
    res.render('DogsNew');
});

//Remove Dog (DELETE/EXTERMINATE/EXTERMINATE)
app.delete('/dogs/:id', async (req,res)=>
{
    await Dogs.findByIdAndRemove(req.params.id)
    res.redirect('/dogs')
})

//Update Dog (PutThatDogBackWhereItCameFromOrSoHelpMe/Update)
app.put('/dogs/:id', async(req, res)=>
{
    if (req.body.hadFirstCheckUp === "on")
    {
        req.body.hadFirstCheckUp = true;
    }
    else
    {
        req.body.hadFirstCheckUp = false;
    };
    const updateDog = await Dogs.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/dogs/${req.params.id}`);
});

//Edit Dog
app.get('/dogs/:id/edit', async(req, res)=>
{
    const foundDog = await Dogs.findById(req.params.id)
    res.render('DogsEdit',
    {
        dogs: foundDog
    })
})

//Show off the Cutie Patootie
app.get('/dogs/:id', async (req, res)=>
{
    const eachDog = await Dogs.findById(req.params.id)
    await res.render('DogsShow',
    {
        dogs: eachDog
    })
})
//=================

//Port =================
app.listen(PORT, (req, res) => {
console.log(`Listening on 3k`);
});
//=================
