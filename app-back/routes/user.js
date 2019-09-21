var express = require('express');
var obtainUsersCollection = require('../lib/connection.js');
var router = express.Router();

/* -----------------------Users JSON OBJECT SCHEMA:
{
    "id" : uuid,
    "identificationNumber" : string,
    "name" : string,
    "cellphone" : string,
    "email" : string,
    "type": boolean,
    "userName" : string,
    "password" : string
}
*--------------------------------------------------/

/* POST USER. */
router.post('/create', function(req, res, next) {
  postUser(function(docs){res.send(docs)});
});
function postUser(callback){
  obtainUsersCollection( (client, obtainUsersCollection) =>{
      obtainUsersCollection.insertOne(req.body).toArray(function(docs,errDatabase) {
      if(errDatabase!==null)
          console.log("Error while getting the collection", errDatabase);
          callback(docs);
          client.close();
    });
  });
}
/* GET USER. */
router.get('/:id', function(req, res, next) {
  getUser(function(docs){res.send(docs)});
});

function getUser(callback){
  obtainUsersCollection( (client, obtainUsersCollection) =>{
      obtainUsersCollection.find({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null)
          console.log("Error while getting the collection", errDatabase);
          callback(docs);
          client.close();
      });
  });
}
/* PUT USER. */
router.put('/update/:id', function(req, res, next) {
  updateUser(function(docs){res.send(docs)});
});

function updateUser(callback){
  obtainUsersCollection( (client, obtainUsersCollection) =>{
      obtainUsersCollection.updateOne({"id":`${req.params.id}`}, {$set:req.body}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null)
          console.log("Error while getting the collection", errDatabase);
          callback(docs);
          client.close();
    });
  });
}
/* DELETE USER. */
router.delete('/remove/:id', function(req, res, next) {
  deleteUser(function(docs){res.send(docs)});
});

function deleteUser(callback){
  obtainUsersCollection( (client, obtainUsersCollection) =>{
      obtainUsersCollection.deleteOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null)
          console.log("Error while getting the collection", errDatabase);
          callback(docs);
          client.close();
  });
  });
}
module.exports = router;
