/*import {obtainFinancingCollection} from '../lib/connection.js';*/

var express = require('express');
//var obtainFinancingCollection = require('../lib/connection.j');
var router = express.Router();

/* GET FINANCING. */
router.get('/financing/:id', function(req, res, next) {
    res.send(
        function getFinancing(){
            obtainFinancingCollection( (client, obtainFinancingCollection) =>{
                obtainFinancingCollection.find({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
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