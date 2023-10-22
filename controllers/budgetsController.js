const express = require("express");
const budgets = express.Router();
const budgetsData = require("../models/budget");

budgets.get("/", (req,res) => {
    console.log("sending all budgets data")
    res.json(budgetsData);
})

budgets.get("/:index", (req,res) => {
    const {index} = req.params;
    console.log("Show Route")
    if (budgetsData[index]) {
        res.status(200).json(budgetsData[index])
    } else {
        res.status(404).send("No budget at that index");
    }
})

budgets.post("/", (req, res) => {
    console.log("post route");
    console.log(req.body, "this is the req body sent from user")
    budgetsData.push(req.body);
    res.status(200).json({status:"OK", payload: budgetsData[budgetsData.length -1]})
})

budgets.delete("/:arrayIndex", (req,res) => {
    const { arrayIndex } = req.params
    if (budgetsData[arrayIndex]){
        const deletedBudget = budgetsData.splice(arrayIndex, 1)
        res.status(200).json(deletedBudget[0])
    }else{
        res.status(404).json({errror: "Could not locate budget to be deleted!"})
    }  
})




