// Controller - All CRUD
// Making queries to DB using model
const Joke = require("../models/jokes.model");


//Create
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
}

// Read all
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log(allJokes);
            res.json(allJokes);
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// Read one
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Update one
module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json({user: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// Delete one
module.exports.deleteAJoke = (req, res) => {
    console.log(req.params);
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}