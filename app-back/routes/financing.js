var express = require('express');
var conn = require('../lib/connection.js'); //Brings me the connection to Mongo with all the needed collections
var router = express.Router();


/* ------FINANCING JSON OBJECT SCHEMA------------
{
    "id" : uuid,
    "name" : string,
    "description" : string,
    "image" : string,
    "start_date" : string-date,
    "end_date": string-date,
    "webpage" : string,
    "percentage": number //--- % That the Financing program cover over the total cost of studies. 
}
-----------------------------------------------*/


/**
 *
 * Helps me to get a JSON string into a JSON Object: Useful for UPDATE & POST Requests.
 */
function parseToJSONObj(smth){
    var jsonStr = JSON.stringify(smth);
    return JSON.parse(jsonStr);
}

function getAll(callback){

    conn.connectCollectionFinancings( (financingCollection) => {
        financingCollection.find({}).toArray( (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
                //TODO something with docs
            console.log(docs);
            callback(docs);
        });
    })

}

function getOne(callback, name_search){
    conn.connectCollectionFinancings( (financingCollection) => {
        financingCollection.find({ name : name_search}).toArray( (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
                //TODO something with docs
            console.log(docs);
            callback(docs);
        });
    })

}

/*
 * GET-ONE FINANCING.  -> La cambie por _id porque mongo usa la funcion ObjectId() para sacar el id entonces es mas complicado
 */
router.get('/:name', function(req, res) {
    var name = req.params.name;
    getOne((docs) => {
            res.json(docs);
        }, name);
});

/*
 * GET-ALL FINANCING. 
 */
router.get('/', function(req, res, next) {
    getAll((docs) => {
        res.json(docs);
    })
});
 
module.exports = router;