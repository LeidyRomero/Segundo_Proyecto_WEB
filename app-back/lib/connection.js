const usersCollection;
const reviewsCollection;
const scolarshipsCollection;
const financingCollection; 
const MongoClient;
const url;
const client;

function connect(){

    MongoClient = require("mongodb").MongoClient;
    url = "mongodb+srv://<admin>:<admin>@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority";
    client = new MongoClient(url, {useNewUrlParser: true });

    client.connect(errClient=>{
        if(errClient!==null) 
          console.log("Error while connecting to mongodb: ", errClient);  
    });
}   

function obtainUsersCollection(callback){
    connect();
    usersCollection = client.db("BKT").collection("users")
    callback(client, usersCollection);
}

function obtainReviewsCollection(callback){
    connect();
    reviewsCollection = client.db("BKT").collection("reviews")
    callback(client, reviewsCollection);
}

function obtainScolarshipsCollection(callback){
    connect();
    scolarshipsCollection = client.db("BKT").collection("scolarships")
    callback(client, scolarshipsCollection);
}

function obtainFinancingCollection(callback){
    connect();
    financingCollection = client.db("BKT").collection("financing")
    callback(client, financingCollection);
}

module.exports = { connect, obtainFinancingCollection,obtainReviewsCollection,obtainScolarshipsCollection,obtainUsersCollection}; 