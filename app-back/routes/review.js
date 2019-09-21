var express = require('express');
var obtainReviewsCollection = require('../lib/connection.js');
var router = express.Router();

/* -----------------------Reviews JSON OBJECT SCHEMA:
{
    "id" : uuid,
    "userId" : string,
    "description" : string
}
*--------------------------------------------------/

/* POST REVIEW. */
router.post('/create', function(req, res, next) {
    postReview(function(docs){res.send(docs)});
  });

  function postReview(callback){
    obtainReviewCollection( (client, obtainReviewCollection) =>{
        obtainReviewCollection.insertOne(req.body).toArray(function(docs,errDatabase) {
        if(errDatabase!==null)
            console.log("Error while getting the collection", errDatabase);
            callback(docs);
        client.close();
      });
    });
}

  /* GET REVIEW. */
  router.get('/:id', function(req, res, next) {
    getReview(function(docs){res.send(docs)});
  });

  function getReview(callback){
    obtainReviewCollection( (client, obtainReviewCollection) =>{
        obtainReviewCollection.find({"name":`${req.params.name}`,"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
        if(errDatabase!==null)
            console.log("Error while getting the collection", errDatabase);
            callback(docs);
            client.close();
        });
      });
    }
  /* PUT REVIEW. */
  router.put('/update/:id', function(req, res, next) {
    updateReview(function(docs){res.send(docs)});
  });

  function updateReview(callback){
    obtainReviewCollection( (client, obtainReviewCollection) =>{
        obtainReviewCollection.updateOne({"id":`${req.params.id}`}, {$set:req.body}).toArray(function(docs,errDatabase) {
        if(errDatabase!==null)
            console.log("Error while getting the collection", errDatabase);
            callback(docs);
        client.close();
    });
    });
}
  /* DELETE REVIEW. */
  router.delete('/remove/:id', function(req, res, next) {
    deleteReview(function(docs){res.send(docs)});
  });

  function deleteReview(callback){
    obtainReviewCollection( (client, obtainReviewCollection) =>{
        obtainReviewCollection.deleteOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
        if(errDatabase!==null)
            console.log("Error while getting the collection", errDatabase);
            callback(docs);
        client.close();
    });
    });
}
  module.exports = router;