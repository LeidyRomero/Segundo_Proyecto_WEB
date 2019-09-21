const mongo = require("mongodb").MongoClient;


let scholarshipsCollection;
let financingCollection;

function connectCollectionFinancings(callback){

    mongo.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
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

    mongo.connect("mongodb+srv://admin:admin@cluster0-6zv9r.mongodb.net/test?retryWrites=true&w=majority",
                    {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        scholarshipsCollection = client.db('BKT').collection('financing');
                        callback(scholarshipsCollection);
                    });
}  

//Falta hacer connectCollectionUsers & connectCollection reviews.

module.exports = {connectCollectionFinancings, connectCollectionScholarships}; 