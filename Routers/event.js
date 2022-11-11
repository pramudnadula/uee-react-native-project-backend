const { addEvent } = require("../Controller/event");

const router = require("express").Router();


router.post("/add", addEvent);


module.exports = router;
