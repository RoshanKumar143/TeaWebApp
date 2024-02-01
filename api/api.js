//Import all the req. packages/modules
let express = require('express');
let app = express();    //initialize to app
let port = 8000;
let {ObjectId} = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect, getData} = require('./dbController');


//middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

//define rout 
app.get('/', (req,res) => {
    res.send('This is home rout of our Tea application')
})


//get all tea categories
app.get('/teaCategories', async(req,res) => {
    let query = {};
    let collection = "menutypes";
    let output = await getData(collection,query);
    res.send(output)
})


//get all menu items 
//NOTE: 
//     1. Don't use since menu already using in queryParams
//     2. Not Used In Project
/* 
app.get('/menu', async(req,res) => {
    let query = {};
    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
})*/


//menu of particular teaCategory by passing Params which is compulsory TO PASS***
//  NOTE:  Not used In Project
/* 
app.get('/menu/:id', async(req,res) => {
    let collection = "teaMenu";
    let query = {menutype_id:Number(req.params.id)};
    let output = await getData(collection,query);
    res.send(output)
})*/



//menu items 
app.get('/menu', async(req,res) => {
    let query = {};
    if(req.query.teaId){
        query = {
            "menutype_id": Number(req.query.teaId)
        }
    }

    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
})


//HealthBenefits
app.get('/health', async(req,res) => {
    let query = {}

    let collection = "healthBenefits";
    let output = await getData(collection,query);
    res.send(output)
})


//filters 
//used Param (which is compulsory to pass)
app.get('/menu/filters', async(req,res) => {
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    // let healthId = Number(req.query.healthId);
    
    if(lcost && hcost){
        query = {
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    } 
    else{
        query = {}
    }


    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
})


app.get('/menu/filters', async(req,res) => {

    let healthId = Number(req.query.healthId);
    
    if(healthId){
        query = {
            "healthBenefits.health_id":Number(healthId)
        }
    } 
    else{
        query = {}
    }


    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
})






//details
//get details of particular menu
app.get('/details/:id', async(req,res) =>{
    //normal mealId
    let id = Number(req.params.id);
    let query  = {"menu_id":id}

    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
}) 



//get orders
app.get('/orders',async(req,res) => {
    let query = {}
    let collection = "orders";
    if(req.query.email){
        query = {email:req.query.email};
    }
    
    let output = await getData(collection,query);
    res.send(output)
  
  })
  


app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port:${port}`);
})









/*      TESTING Filters
    ------------------------
    Used

    http://localhost:8000/menu/filters?lcost=10&hcost=21
    http://localhost:8000/menu/filters?lcost=20&hcost=51
    http://localhost:8000/menu/filters?lcost=50&hcost=151
    http://localhost:8000/menu/filters?lcost=151&hcost=250
    http://localhost:8000/menu/filters?lcost=0&hcost=250   //all items


    Not Used

    http://localhost:8000/menu?lcost=1&hcost=21


*/