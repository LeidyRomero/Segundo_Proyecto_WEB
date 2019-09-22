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

/* GET ALL COLLECTION FINANCING. */
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

/* GET ONE COLLECTION FINANCING. */
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

/*INSERT ONE COLLECTION FINANCING */
function inOne(callback, obj){
    conn.connectCollectionFinancings( (financingCollection) => {
        financingCollection.insertOne( obj, (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
            console.log(docs);
            callback(docs);
        });
    })
}


/* UPDATE ONE COLLECTION FINANCING */
function updOne(callback, name_search, obj){
  conn.connectCollectionFinancings( (financingCollection) => {
      financingCollection.updateOne( {name : name_search}, {$set : obj}, (err, docs) => {
          if(err !== null){
              console.log("Error while getting the collection", err);
              return;
          } 
          console.log(docs);
          callback(docs);
      });
  })
}

/* DELETE ONE COLLECTION FINANCING */
function delOne(callback, name_search){
  conn.connectCollectionFinancings( (financingCollection) => {
      financingCollection.deleteOne( {name : name_search}, (err, docs) => {
          if(err !== null){
              console.log("Error while getting the collection", err);
              return;
          } 
          console.log(docs);
          callback(docs);
      });
  })
}

/* ----------------------------------- URL DEFINED DIRECTIONS ------------------------------------------------------------------*/

/*
 * GET-ONE FINANCING.  
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

/*
 * INSERT-ONE FINANCING. 
 */
router.post('/', function(req, res) {
    var obj = parseToJSONObj(req.body);
    inOne((response) => {
        res.json(response);
    }, obj);
});

/*
 * PUT-ONE FINANCING. 
 */
router.put("/:name", (req, res) => {
    var name = req.params.name;
    var obj = parseToJSONObj(req.body);
    updOne((response) => {
        res.json(response);
    }, name, obj);

});

/*
 * PUT-ONE FINANCING. 
 */
router.delete("/:name", (req, res) => {
    var name = req.params.name;
    delOne((data) => {
        res.json(data);
    }, name)
});
 
module.exports = router;