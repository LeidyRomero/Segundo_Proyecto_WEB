var express = require('express');
var obtainScolarshipsCollection = require('../lib/connection.js');
var router = express.Router();

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


module.exports = router;