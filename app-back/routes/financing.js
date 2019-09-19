var express = require('express');
var router = express.Router();

/* GET FINANCING. */
router.get('/getFinancing', function(req, res, next) {
    res.send("Hola");
  });
  
module.exports = router;