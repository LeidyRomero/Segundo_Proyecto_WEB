var express = require('express');
var obtainUsersCollection = require('../lib/connection.js');
var router = express.Router();

/* POST USER. */
router.post('/user/create', function(req, res, next) {
  res.send(
    function postUser(){
      obtainUsersCollection( (client, obtainUsersCollection) =>{
          obtainUsersCollection.insertOne({"id":`${req.params.id}`,"userId":`${req.params.userId}`,"description":`${req.params.description}` }).toArray(function(errDatabase, docs) {
          if(errDatabase!==null)
              console.log("Error while getting the collection", errDatabase);
              //TODO something with docs
          client.close();
      });
      });
  }
  )
});
/* GET USER. */
router.get('/user/:id', function(req, res, next) {
  res.send(
    function getUser(){
      obtainUsersCollection( (client, obtainUsersCollection) =>{
          obtainUsersCollection.find({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
          if(errDatabase!==null)
              console.log("Error while getting the collection", errDatabase);
              //TODO something with docs
          client.close();
      });
      });
  }
  );
});
/* PUT USER. */
router.put('/user/update/:id', function(req, res, next) {
  res.send(
    function updateUser(){
      obtainUsersCollection( (client, obtainUsersCollection) =>{
          obtainUsersCollection.updateOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
          if(errDatabase!==null)
              console.log("Error while getting the collection", errDatabase);
              //TODO something with docs
          client.close();
      });
      });
  }
  );
});
/* DELETE USER. */
router.delete('/user/remove/:id', function(req, res, next) {
  res.send(
    function deleteUser(){
      obtainUsersCollection( (client, obtainUsersCollection) =>{
          obtainUsersCollection.deleteOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
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
