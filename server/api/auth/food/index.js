import express from "express";

import { FoodModel } from "../../../Database/allModules";

const Router = express.Router();
// *Router  /:_id
// *Desc   get food om id
// *params   _id
// *Access  Get

Router.get(":/_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = FoodModel.findById(_id);
        return res.json({ foods });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



// *Router  /r/:_id
// *Desc   get all food om particlular restro
// *params   _id
// *Access public 
//method   Get

Router.get(":/_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({
            restaurant: _id,
        });
        return res.json({ foods });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


// *Router  /c/category
// *Desc   get all food om particlular category
// *params  category
// *Access public 
//method   Get

Router.get(":/_id", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" },//i => case insentivity, regex (regular expression)\

        });

        if (!foods) {
            return res.status(404).json({ error: 'No food matched with ${category}' });
        }
        return res.json({ foods });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});






export default Router;
