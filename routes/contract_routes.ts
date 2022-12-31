const createContract = require("./../controllers/contractController");
const getContract = require("./../controllers/contractController");
const Router = require("express");

export const contractRoute = Router();

// routes for getting and creating contracts

contractRoute.post("/", createContract);
contractRoute.get("/", getContract);
