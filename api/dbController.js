//DB Connections

let mongo = require('mongodb');
let { MongoClient } = require('mongodb');
let mongoUrl = "mongodb+srv://testuser:testuser@cluster0.mwialsf.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(mongoUrl);


async function dbConnect() {
    await client.connect();
    console.log('DB Connected.....')
}


let db = client.db('teawebsite');


async function getData(colName, query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    }catch(err){
        output.push({"Error" : "Error in getting data"})
    }
    return output
}


module.exports = {
    dbConnect,
    getData
}