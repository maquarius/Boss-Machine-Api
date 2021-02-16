const ideasRouter = require("express").Router();

module.exports = ideasRouter;

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");

ideasRouter.get("/", (req, res, next) => {
  const data = getAllFromDatabase("ideas");
  res.send(data);
});

ideasRouter.post("/", (req, res, next) => {});

ideasRouter.get("/:ideasId", (req, res, next) => {});

ideasRouter.put("/:ideasId", (req, res, next) => {});

ideasRouter.delete("/:ideasId", (req, res, next) => {});
