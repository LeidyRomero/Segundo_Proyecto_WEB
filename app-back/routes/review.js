var express = require('express');
var obtainReviewsCollection = require('../lib/connection.js');
var router = express.Router();

/* -----------------------Reviews JSON OBJECT SCHEMA:
{
    "id" : uuid,
    "userId" : string,
    "description" : string

    //New schema
    "id": uuid, 
    "userId": {
      $ref: "table_name"
      $id: ObjectId() //ID del usuario
      $db: "BKT"
    }
     "scholarshipId": {
      $ref: "table_name"
      $id: ObjectId() //ID de la beca
      $db: "BKT"
    }
     "financingId": {
      $ref: "table_name"
      $id: ObjectId() //ID de la financiación
      $db: "BKT"
    }
    title: string
    text: string
    likes: int32
    
}
*--------------------------------------------------/

/* POST REVIEW. */
router.post('/create', function(req, res, next) {
  postReview(function(docs){res.send(docs)});
});

function postReview(callback){
  obtainReviewsCollection( (client, obtainReviewsCollection) =>{
      obtainReviewsCollection.insertOne(req.body).toArray(function(docs,errDatabase) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
      callback(docs);
      client.close();
    });
  });
}

/* GET ALL REVIEWS. */
router.get('/', function(req, res, next) {
  getAllReviews(function(docs){res.send(docs)});
});
function getAllReviews(callback){

  conn.connectCollectionReviws( (reviewsCollection) => {
      reviewsCollection.find({}).toArray( (err, docs) => {
          if(err !== null){
              console.log("Error while getting the collection", err);
              return;
          } 
          console.log(docs);
          callback(docs);
      });
  })

}

/* GET ONE REVIEW BY ID. */
router.get('/:id', function(req, res, next) {
  getReview(function(docs){res.send(docs)});
});

function getReview(callback){
  obtainReviewsCollection( (client, obtainReviewsCollection) =>{
      obtainReviewsCollection.find({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
      callback(docs);
      client.close();
      });
    });
  }
/* GET ONE REVIEW BY FINANCINGID OR SCOLARSHIPID. */
router.get('/get/:id', function(req, res, next) {
  getReview(function(docs){res.send(docs)});
});

function getReview(callback){
  obtainReviewsCollection( (client, obtainReviewsCollection) =>{
      obtainReviewsCollection.find({"scolarshipId":`${if(req.params.scolarshipId)}`},,{"financingId":`${if(req.params.financingId)}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
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
  obtainReviewsCollection( (client, obtainReviewsCollection) =>{
      obtainReviewsCollection.updateOne({"id":`${req.params.id}`}, {$set:req.body}).toArray(function(docs,errDatabase) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
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
  obtainReviewsCollection( (client, obtainReviewsCollection) =>{
      obtainReviewsCollection.deleteOne({"id":`${req.params.id}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
      callback(docs);
       client.close();
    });
  });
}

module.exports = router;