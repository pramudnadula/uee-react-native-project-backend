const Post = require("../Model/Post");

exports.addPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getOnePost = async (req, res) => {
    try {
        const { pid } = req.body
        const post = await Post.findById(pid)
        res.send(post)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getAllPost = async (req, res) => {
    try {

        const posts = await Post.find()
        res.send(posts)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.updatePost = async (req, res) => {
    try {
        const { pid } = req.body.pid
        const { newob } = req.body.newob
        const newpost = await Post.findByIdAndUpdate({ pid, newob })
        res.send(newpost)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getMyPosts = async (req, res) => {
    try {
        const { uid } = req.body.pid
        const posts = await Post.find({ uid })
        res.send(posts)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.addLilke = async (req, res) => {
    try {
        const { uid, pid } = req.body
        const post = await Post.findById(pid)
        post.likes.push(uid)
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}


exports.addComment = async (req, res) => {
    try {
        const { comment, pid } = req.body
        const post = await Post.findById(pid)
        post.comments.push(comment)
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

