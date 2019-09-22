var express = require('express');
var conn = require('../lib/connection.js');
var router = express.Router();

/* ----------------Scholarships JSON OBJECT SCHEMA:
{
    "id" : uuid,
    "name" : string,
    "description" : string,ss
    "image" : string,
    "start_date" : string-date,
    "end_date": string-date,
    "webpage" : string,
}
*--------------------------------------------------/

/**
 *
 * Helps me to get a JSON string into a JSON Object: Useful for UPDATE & POST Requests.
 */
function parseToJSONObj(smth){
  var jsonStr = JSON.stringify(smth);
  return JSON.parse(jsonStr);
}

/* GET ALL COLLECTION SCHOLARSHIP. */
function getAll(callback){

    conn.connectCollectionScholarships( (scolarshipsCollection) => {
        scolarshipsCollection.find({}).toArray( (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
            console.log(docs);
            callback(docs);
        });
    })

}
/*GET ONE COLLECTION SCHOLARSHIP*/
function getOne(callback, name_search){
    conn.connectCollectionScholarships( (scolarshipsCollection) => {
        scolarshipsCollection.find({ name : name_search}).toArray( (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
            console.log(docs);
            callback(docs);
        });
    })

}

/*INSERT ONE COLLECTION SCHOLARSHIPS */
function inOne(callback, obj){
    conn.connectCollectionScholarships( (scolarshipsCollection) => {
        scolarshipsCollection.insertOne( obj, (err, docs) => {
            if(err !== null){
                console.log("Error while getting the collection", err);
                return;
            } 
            console.log(docs);
            callback(docs);
        });
    })
}


/* UPDATE ONE COLLECTION SCHOLARSHIPS */
function updOne(callback, name_search, obj){
  conn.connectCollectionScholarships( (scolarshipsCollection) => {
      scolarshipsCollection.updateOne( {name : name_search}, {$set : obj}, (err, docs) => {
          if(err !== null){
              console.log("Error while getting the collection", err);
              return;
          } 
          console.log(docs);
          callback(docs);
      });
  })
}

/* UPDATE ONE COLLECTION SCHOLARSHIPS */
function delOne(callback, name_search){
  conn.connectCollectionScholarships( (scolarshipsCollection) => {
      scolarshipsCollection.deleteOne( {name : name_search}, (err, docs) => {
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
 * GET-ALL SCHOLARSHIPS. 
 */
router.get('/', function(req, res) {
    getAll((docs) => {
        res.json(docs);
    })
});

/*
 * GET-ONE SCHOLARSHIP. 
 */
router.get('/:name', function(req, res) {
    var name = req.params.name;
    getOne((docs) => {
        res.json(docs);
    }, name);
});


/*
 * INSERT-ONE SCHOLARSHIPS. 
 */
router.post('/', function(req, res) {
    var obj = parseToJSONObj(req.body);
    inOne((response) => {
        res.json(response);
    }, obj);
});

/*
 * PUT-ONE SCHOLARSHIPS. 
 */
router.put("/:name", (req, res) => {
    var name = req.params.name;
    var obj = parseToJSONObj(req.body);
    updOne((response) => {
        res.json(response);
    }, name, obj);

});

/*
 * PUT-ONE SCHOLARSHIPS. 
 */
router.delete("/:name", (req, res) => {
    var name = req.params.name;
    delOne((data) => {
        res.json(data);
    }, name)
});


module.exports = router;