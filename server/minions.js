const minionRouter = require("express").Router();

module.exports = minionRouter;

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");

minionRouter.param("minionId", (res, req, next, id) => {
  const minion = getFromDatabaseById("minion", id);
  if (!minion) {
    res.status(404).send();
  } else {
    req.minion = minion;
    next();
  }
});
minionRouter.get("/", (req, res, next) => {
  const data = getAllFromDatabase("minions");
  res.send(data);
});

minionRouter.post("/", (req, res, next) => {
  const newMenion = addToDatabase("minion", req.body);
  res.status(202).send(newMenion);
});

minionRouter.get("/:minionId", (req, res, next) => {
  res.send(req.minion);
});

minionRouter.put("/:minionId", (req, res, next) => {
  // not neccesary since the midleware. IT checks if the updated minion exists. However, this maybe checks if the update is allowed
  const minionChange = updateInstanceInDatabase("minion", req.body);
  if (!minionChange) {
    res.status(404).send();
  } else {
    res.send(minionChange);
  }
});

minionRouter.delete("/:minionId", (req, res, next) => {
  const deleted = deleteAllFromDatabase("minion", req.params.minionId);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
