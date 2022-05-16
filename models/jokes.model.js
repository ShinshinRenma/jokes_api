const mongooseConfig = require("../config/mongoose.config");

// Import Mongoose to build a model
const mongoose = require("mongoose");

// The schema - rules that the entries in DB must follow
const jokeSchema = new mongoose.Schema(
    {
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long."]
    }
    }, 
    {timestamps: true}
);

// The model - This is what we use to make the actual queries to DB
const Joke = mongoose.model('Joke', jokeSchema);

// Export the model
module.exports = Joke;