const express = require ("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const maesitrepRouter = require("./routes/MAESitRep"); 
app.use("/maesitrep", maesitrepRouter);

db.sequelize
    .sync()
    .then(() => {
    app.listen(3001, () => {
        console.log("Server is running on Port 3001");
    });
});




