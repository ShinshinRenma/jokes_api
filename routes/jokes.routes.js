//import the controller to use the instantiated
const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.createNewJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.delete("/api/jokes/:id", JokeController.deleteAJoke);
    app.put("/api/jokes/:id", JokeController.updateOneJoke)
}