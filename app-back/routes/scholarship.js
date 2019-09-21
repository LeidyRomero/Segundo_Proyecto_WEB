var express = require('express');
var obtainScolarshipsCollection = require('../lib/connection.js');
var router = express.Router();

/* ----------------Scholarships JSON OBJECT SCHEMA:
{
    "id" : uuid,
    "name" : string,
    "description" : string,
    "image" : string,
    "start_date" : string-date,
    "end_date": string-date,
    "webpage" : string,
}
*--------------------------------------------------/

/* GET SCOLARSHIP. */
router.get('/scolarship/:id', function(req, res, next) {
    res.send(
      function getScolarship(){
        obtainScolarshipsCollection( (client, obtainScolarshipsCollection) =>{
            obtainScolarshipsCollection.find({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
            if(errDatabase!==null)
                console.log("Error while getting the collection", errDatabase);
                //TODO something with docs
            client.close();
        });
        });
    }
    );
  });

  router.get('/scolarship/', function(req, res, next) {
    res.send(
      function getScolarship(){
        obtainScolarshipsCollection( (client, obtainScolarshipsCollection) =>{
            obtainScolarshipsCollection.find({}).toArray(function(errDatabase, docs) {
            if(errDatabase!==null)
                console.log("Error while getting the collection", errDatabase);
                //TODO something with docs
            client.close();
        });
        });
    }
    );
  });


module.exports = router;