const meetingRouter = require("express").Router();

module.exports = meetingRouter;

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");

meetingRouter.get("/", (req, res, next) => {
  const data = getAllFromDatabase("meetings");
  res.send(data);
});

meetingRouter.post("/", (req, res, next) => {});

meetingRouter.delete("/", (req, res, next) => {});
