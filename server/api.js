const express = require("express");
const apiRouter = express.Router();

const minionRouter = require("./minions");
const ideaRouter = require("./ideas");
const meetingRouter = require("./meetings");

apiRouter.use("/minions", minionRouter);
apiRouter.use("/meetings", ideaRouter);
apiRouter.use("/idea", meetingRouter);

module.exports = apiRouter;
