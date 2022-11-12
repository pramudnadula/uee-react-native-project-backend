const router = require("express").Router();
const { addMarianResources, getMarianResources, getOneMarianResources } = require("../Controller/marianResources");

router.post("/addMarianResources", addMarianResources);
router.get("/getMarianResources", getMarianResources);
router.get("/getOneMarianResources/:id", getOneMarianResources);

module.exports = router;