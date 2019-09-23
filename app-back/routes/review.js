var connection = require("../lib/connection").connectCollectionReviews;
var express = require("express");
var router = express.Router();
var mongo = require('mongodb')

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
router.post("/create", function(req, res, next) {
  postReview(req.body, res)
});

function postReview(review, res) {
  connection(reviewsCollection => {
    reviewsCollection.insertOne({...review}), function(err, result){
      if(err){
        console.err(err);
        res.send("There was an internal server error when creating the review").status(500);
      } else {
        console.log("did it!")
        console.log(result)
        res.send(result)
      }
    }
  })
}

//Get all reviews
router.get("/", function(req, res, next) {
  getAllReviews(function(docs) {
    res.send(docs);
  });
});

//Get all reviews - callback
function getAllReviews(callback) {
  connection(reviewsCollection => {
    reviewsCollection.find({}).toArray((err, docs) => {
      if (err !== null) {
        console.log("Error while getting the collection", err);
        return;
      }
      console.log(docs);
      callback(docs);
    });
  });
}

//Get one review with the given id
router.get("/:id", function(req, res, next) {
  getReview(res, id)
});

//Get one review - callback
function getReview(res, id) {
  connection(collection => {
    let o_id = new mongo.ObjectID(id);
    collection.findOne({_id: o_id}).then(reviewFound => {
      if (!reviewFound){
        return res.status(404).end();
      }
      // console.log(json(userFound));
      return res.status(200).json(reviewFound)
    })
    .catch(err => console.log(err));
     });
}

//Get the reviews from a specific scholarship
router.get("/scholarship/:id", function(req, res){
  console.log(req.params)
  getReviewsFromScholarship(req.params.id, res);
})

function getReviewsFromScholarship(scholarshipId, res){
  connection(reviewsCollection => {
    reviewsCollection.find({scholarhipId: scholarshipId }).toArray((err, docs) => {
      if (err !== null) {
        console.log("Error while getting the collection", err);
        return;
      }
      console.log(docs);
      res.send(docs)
    });
  });
}

//Get the reviews from a specific financing aid
router.get("/financing/:id", function(req, res){
  console.log(req.params)
  getReviewsFromFinancing(req.params.id, res);
})

function getReviewsFromFinancing(financingId, res){
  connection(reviewsCollection => {
    reviewsCollection.find({financingId: financingId }).toArray((err, docs) => {
      if (err !== null) {
        console.log("Error while getting the collection", err);
        return;
      }
      console.log(docs);
      res.send(docs)
    });
  });
}

/* PUT REVIEW. */
router.put("/update/:id", function(req, res, next) {
  updateReview(function(docs) {
    res.send(docs);
  });
});

function updateReview(callback) {
  obtainReviewCollection((client, obtainReviewCollection) => {
    obtainReviewCollection
      .updateOne({ id: `${req.params.id}` }, { $set: req.body })
      .toArray(function(docs, errDatabase) {
        if (errDatabase !== null) {
          console.log("Error while getting the collection", errDatabase);
          return;
        }
        callback(docs);
        client.close();
      });
  });
}

/* DELETE REVIEW. */
router.delete("/remove/:id", function(req, res, next) {
  deleteReview(function(docs) {
    res.send(docs);
  });
});

function deleteReview(reviewId, res) {
  connection(( reviewCollection ) => {
    reviewCollection
      .deleteOne({ id: reviewId })
      .toArray(function(errDatabase, docs) {
        if (errDatabase !== null) {
          console.log("Error while getting the collection", errDatabase);
          return;
        }
        res.send("Deleted the review successfully")
      });
  });
}

module.exports = router;
