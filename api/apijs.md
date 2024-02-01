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
//NOTE: Don't use since menu already using in queryParams
/* 
app.get('/menu', async(req,res) => {
    let query = {};
    let collection = "teaMenu";
    let output = await getData(collection,query);
    res.send(output)
})*/


//menu of particular teaCategory by passing Params which is compulsory TO PASS***
app.get('/menu/:id', async(req,res) => {
    let collection = "teaMenu";
    let query = {menutype_id:Number(req.params.id)};
    let output = await getData(collection,query);
    res.send(output)
})



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




//filter 
//used Param (which is compulsory to pass)
app.get('/filter/:menuId', async(req,res) => {
    let menuId = Number(req.params.menuId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    
    if(menuId){
        query = {
            "menu_id":Number(menuId)
        }
    }else if(lcost && hcost){
        query = {
            "menu_id":Number(menuId),
            $and:[{menu_price:{$gt:lcost,$lt:hcost}}]
        }
    }else{
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