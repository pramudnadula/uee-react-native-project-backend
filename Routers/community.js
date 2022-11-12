const { addPost, getAllPost, getMyPosts, deletePost, addLilke, getOnePost, delLilke, addComment } = require("../Controller/community");

const router = require("express").Router();


router.post("/add", addPost);
router.get("/all", getAllPost);
router.post("/allmy", getMyPosts);
router.post("/del", deletePost);
router.post("/like", addLilke);
router.post("/delike", delLilke);
router.get("/one", getOnePost);
router.post("/addcomment", addComment);


module.exports = router;
