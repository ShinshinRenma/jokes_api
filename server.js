const express = require ("express");
const app = express();
const PORT = 8000;
const DB = "jokes_db";

//Middleware
app.use(express.json(), express.urlencoded({extended: true}));

// Connect to the DB
const exportedDBFunction = require("./config/mongoose.config");
exportedDBFunction(DB);

// Import routes here after construction
const routesFunction = require("./routes/jokes.routes");
routesFunction(app);

app.listen(PORT, () => console.log(`>>> Server up on port: ${PORT}`))