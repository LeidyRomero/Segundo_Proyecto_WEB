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
  postReview(function(docs) {
    res.send(docs);
  });
});

function postReview(callback) {
  obtainReviewCollection((client, obtainReviewCollection) => {
    obtainReviewCollection
      .insertOne(req.body)
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
  console.log("This is the back");
  const id = req.params.id;
  console.log(id);
  getReview(res, id)
});

//Get one review - callback
function getReview(res, id) {
  connection(collection => {
    let o_id = new mongo.ObjectID(id);
    console.log("this is the id created " + o_id)
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

/* GET ONE REVIEW BY FINANCINGID OR SCOLARSHIPID. */
router.get("/get/:id", function(req, res, next) {
  getReviewsFromPost(function(req, docs) {
    console.log("This is the request");
    console.log(req.body);
    res.send(docs);
  });
});

function getReviewsFromPost(req, callback) {
  console.log(req.body);
  /*
  obtainReviewCollection( (client, obtainReviewCollection) =>{
      obtainReviewCollection.find({"scolarshipId":`${if(req.params.scolarshipId)}`},{"financingId":`${if(req.params.financingId)}`}).toArray(function(errDatabase, docs) {
      if(errDatabase!==null){
          console.log("Error while getting the collection", errDatabase);
    return;
}
      callback(docs);
      client.close();
      });
    }); */
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

function deleteReview(callback) {
  obtainReviewCollection((client, obtainReviewCollection) => {
    obtainReviewCollection
      .deleteOne({ id: `${req.params.id}` })
      .toArray(function(errDatabase, docs) {
        if (errDatabase !== null) {
          console.log("Error while getting the collection", errDatabase);
          return;
        }
        callback(docs);
        client.close();
      });
  });
}

module.exports = router;
