import express from "express";
import { UserModel } from "../../../Database/allModules";

const Router = express.Router();

// *Router  /
// *Desc   get authorised details based on city
// *params   none
// *Access  Public
// *method  Get

Router.get("/", async (req, res) => {
    try {
        const { email, fullname, phoneNumber, address } = req.user
        return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})