var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model Schema
module.exports = MovieSchema
