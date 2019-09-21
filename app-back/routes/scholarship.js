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

/* GET ALL SCOLARSHIP. */
function getAll(callback){

    conn.connectCollectionScolarships( (scolarshipsCollection) => {
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
/*GET ONE SCOLARSHIP*/
function getOne(callback, name_search){
    conn.connectCollectionScolarships( (scolarshipsCollection) => {
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

/*
 * GET-ONE SCOLARSHIP.  -> La cambie por _id porque mongo usa la funcion ObjectId() para sacar el id entonces es mas complicado
 */
router.get('/:name', function(req, res) {
    var name = req.params.name;
    getOne((docs) => {
            res.json(docs);
        }, name);
});

/*
 * GET-ALL SCOLARSHIPS. 
 */
router.get('/', function(req, res, next) {
    getAll((docs) => {
        res.json(docs);
    })
});


module.exports = router;