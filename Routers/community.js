const { addPost } = require("../Controller/community");

const router = require("express").Router();


router.post("/add", addPost);


module.exports = router;
