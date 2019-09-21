const client = require("mongodb").MongoClient;


let scholarshipsCollection;
let financingCollection;
let reviessCollection;
let usersCollection;

function connectCollectionFinancings(callback){

    client.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
                    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        financingCollection = client.db('BKT').collection('financing');
                        callback(financingCollection);
                    });
}   

function connectCollectionScholarships(callback){

    client.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
                    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        scholarshipsCollection = client.db('BKT').collection('scolarships');
                        callback(scholarshipsCollection);
                    });
}  

function connectCollectionUsers(callback){

    client.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
                    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        usersCollection = client.db('BKT').collection('users');
                        callback(usersCollection);
                    });
}   

function connectCollectionReviews(callback){

    client.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
                    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        reviewsCollection = client.db('BKT').collection('reviews');
                        callback(reviewsCollection);
                    });
}  

//Falta hacer connectCollectionUsers & connectCollection reviews.

module.exports = {connectCollectionFinancings, connectCollectionScholarships, connectCollectionUsers, connectCollectionReviews}; 