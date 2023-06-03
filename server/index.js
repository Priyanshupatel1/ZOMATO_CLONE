import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

import PrivateRouteConfig from "./config/route.config"
//Database connection 
import ConnectDB from "./Database/connection";

import Auth from './api/auth';
import Food from './api/auth/food';
import Restaurant from './api/auth/restaurant';
import User from './api/auth/user';


dotenv.config();
const zomato = express()
PrivateRouteConfig(passport);

zomato.use(express.json());
zomato.use(session({ secret: "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
    res.json({
        message: "server is running successfully..",
    });
});

//  /auth/signup
zomato.use("/auth", Auth);
zomato.use("/auth/food", Food);
zomato.use("/auth/restaurant", Restaurant);
zomato.use("/auth/user", passport.authenticate("jwt", { session: false }), User);




const PORT = 4000;
zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("server is running!!!");
        })
        .catch((error) => {
            console.log("server is running but failed to connect database");
            console.log(error);
        })

});