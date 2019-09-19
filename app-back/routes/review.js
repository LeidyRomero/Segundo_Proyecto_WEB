var express = require('express');
var obtainReviewsCollection = require('../lib/connection.js');
var router = express.Router();
/* POST REVIEW. */
router.post('/review/create', function(req, res, next) {
    res.send(
      function postReview(){
        obtainReviewCollection( (client, obtainReviewCollection) =>{
            obtainReviewCollection.insertOne({"id":`${req.params.id}`,"identificationNumber":`${req.params.identificationNumber}`,"name":`${req.params.name}`,"cellphone":`${req.params.cellphone}`,"email":`${req.params.email}`,"type":`${req.params.type}`,"userName":`${req.params.userName}`,"password":`${req.params.password}`}).toArray(function(errDatabase, docs) {
            if(errDatabase!==null)
                console.log("Error while getting the collection", errDatabase);
                //TODO something with docs
            client.close();
        });
        });
    }
    );
  });
  /* GET REVIEW. */
  router.get('/review/:id', function(req, res, next) {
    res.send(
      function getReview(){
        obtainReviewCollection( (client, obtainReviewCollection) =>{
            obtainReviewCollection.find({"name":`${req.params.name}`,"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
            if(errDatabase!==null)
                console.log("Error while getting the collection", errDatabase);
                //TODO something with docs
            client.close();
        });
        });
    }
    );
  });
  /* PUT REVIEW. */
  router.put('/review/update/:id', function(req, res, next) {
    res.send(
      function updateReview(){
        obtainReviewCollection( (client, obtainReviewCollection) =>{
            obtainReviewCollection.updateOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
            if(errDatabase!==null)
                console.log("Error while getting the collection", errDatabase);
                //TODO something with docs
            client.close();
        });
        });
    }
    );
  });
  /* DELETE REVIEW. */
  router.delete('/review/remove/:id', function(req, res, next) {
    res.send(
      function deleteReview(){
        obtainReviewCollection( (client, obtainReviewCollection) =>{
            obtainReviewCollection.deleteOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
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