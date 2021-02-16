const express = require("express");
const apiRouter = express.Router();

const minionRouter = require("./minions");

apiRouter.use("/minions", minionRouter);

apiRouter.get();

module.exports = apiRouter;
