var express = require('express');
var router = express.Router();
/* POST REVIEW. */
router.post('/createReview', function(req, res, next) {
    res.send();
  });
  /* GET REVIEW. */
  router.get('/review/:id', function(req, res, next) {
    res.send();
  });
  /* PUT REVIEW. */
  router.put('/putReview', function(req, res, next) {
    res.send();
  });
  /* DELETE REVIEW. */
  router.delete('/deleteReview', function(req, res, next) {
    res.send();
  });
  module.exports = router;