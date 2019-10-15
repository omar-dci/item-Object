var express = require('express');
var router = express.Router();
const {addItem, getData} = require('../controllers/mongodb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1');
});
router.post('/', function(req, res, next) {
  addItem(req.body.name, req.body.description).then(()=>{
    res.json(1);
  }).catch(error=>{
    res.json(2);
  })
  
});
router.post('/getdata', function(req, res, next) {
  getData().then((data)=>{
    res.json(data);
  }).catch(error=>{
    res.json(2);
  })
  
});

module.exports = router;
