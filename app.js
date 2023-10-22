const express = require("express");
const budgets = require("./controllers/budgetsController");

const app = express();
const cors = require("cors")
app.use(cors())

app.use(express.json());
app.use("/budgets", budgets);

const coolest = "Alex";

app.get("/", (req, res) => {
    console.log(coolest);
    const upperCoolest = coolest.toUpperCase();
    res.send(`Welcome to my express app.  ${upperCoolest} is the coolest. its official`);
})

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found "})
})



module.exports = app;