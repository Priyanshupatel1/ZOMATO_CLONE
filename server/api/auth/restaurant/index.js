import express from "express";

import { RestaurantModel } from "../../../Database/allModules";

const Router = express.Router();
// *Router  /
// *Desc   get all reastro details based on city
// *params   none
// *Access  Public
// *method  Get

Router.get("/", async (req, res) => {
    try {
        //http://localhost:4000/restaurant/?city=hospet
        const { city } = req.query;
        const restaurants = await ResturantModel.find(city);
        if (restaurants.lenght === 0) {
            return res.json({ error: "restaurant not found" });

        }
        return res.json({ restaurants });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


// *Router  /:_id
// *Desc   get individual restro details based on the id
// *params   _id
// *Access  Public
// *method  Get

Router.get("/:_id", async (req, res) => {
    try {
        //
        const { _id } = req.params;
        const restaurant = await ResturantModel.findById(_id);
        if (!restaurant) {
            return res.json({ error: "Restaurant NOt found" });

        }
        return res.json({ restaurant });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




// *Router  /search/:searchstring
// *Desc   get individual restro details based on saerch string
// *params   searchString
// *Access  Public
// *method  Get

Router.get("/search/searchString", async (req, res) => {
    try {
        // searchString : "udupi Hotel"

        //results={
        // UdupiMandirHotel
        // Udupi
        // Udupi Hotel 
        // Hopset Udupi 
        //}
        const { searchString } = req.params;
        const restaurants = await ResturantModel.find({
            name: { $regex: searchString, $options: "i" },
        });
        if (restaurants.lenght === 0) {
            return res.json({ error: `No Restaurants matched with ${searchString}` });

        }
        return res.json({ restaurants });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});





export default Router;
