var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Song = mongoose.model('Song');

router.get('/', function(req, res) {
  Song.find( function(err, songs) {
    res.json(songs);
  });
});

router.post('/', function(req, res) {
  new Song({
    text: req.body.text,
    completed: false
  }).save( function(err, song) {
    res.json(song);
  });
});

router.put('/:id', function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    song.completed = !song.completed;
    song.save( function(err) {
      res.send(song);
    });
  });
});


module.exports = router;
