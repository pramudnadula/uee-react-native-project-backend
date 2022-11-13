const router = require("express").Router();
const { addMarianResources, getMarianResources, getOneMarianResources, getMarianResourcesByUid, updateMarianResources, deleteMarianResources } = require("../Controller/marianResources");

router.post("/addMarianResources", addMarianResources);
router.get("/getMarianResources", getMarianResources);
router.get("/getOneMarianResources/:id", getOneMarianResources);
router.post("/getMarianResourcesByUid", getMarianResourcesByUid);
router.put("/updateMarianResources/:id", updateMarianResources);
router.delete("/deleteMarianResources/:id", deleteMarianResources);

module.exports = router;