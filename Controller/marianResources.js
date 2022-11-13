const MarianResources = require('../Model/marianResources');

//add MarianResources
exports.addMarianResources = async (req, res) => {

    const { title, image, name, details, category, author, habit, lifeSpan, uid } = req.body;
    console.log(req.body);
    if (!image || !name || !details || !category) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    const marianResources = new MarianResources({
        title,
        image,
        name,
        details,
        category,
        author,
        habit,
        lifeSpan,
        uid

    });
    try {
        const savedMarianResources = await marianResources.save();
        res.send({ message: "success", MarianResources: savedMarianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//get all MarianResources
exports.getMarianResources = async (req, res) => {
    try {
        const marianResources = await MarianResources.find();
        res.send({ message: "success", marianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//get one MarianResources
exports.getOneMarianResources = async (req, res) => {
    try {
        const marianResources = await MarianResources.findById(req.params.id);
        res.send({ message: "success", marianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//get all marianResources by object uid
exports.getMarianResourcesByUid = async (req, res) => {
    try {
        uid = req.body.uid;
        if (!uid) {
            return res.status(400).json({ message: "Please enter all fields" });
        }
        const marianResources = await MarianResources.find(
            { uid: uid }
        );
        res.send({ message: "success", marianResources: marianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//update MarianResources
exports.updateMarianResources = async (req, res) => {
    try {
        const marianResources = await MarianResources.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "success", marianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

//delete MarianResources
exports.deleteMarianResources = async (req, res) => {
    try {
        const marianResources = await MarianResources.findByIdAndDelete(req.params.id);
        res.send({ message: "success", marianResources });
    }
    catch (err) {
        res.status(400).send(err);
    }
}
