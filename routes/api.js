const express = require('express');
const router = express.Router();

router.get('/plumbers', function(req, res){
  res.send({ type: 'GET' });
});

router.post('/plumbers', function(req, res){
  res.send({ type: 'POST' });
});

router.put('/plumbers/:id', function(req, res){
  res.send({ type: 'PUT' });
});

router.delete('/plumbers/:id', function(req, res){
  res.send({ type: 'DELETE' });
});

module.exports = router;
