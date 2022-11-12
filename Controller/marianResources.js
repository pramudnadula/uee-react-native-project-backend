const MarianResources = require('../Model/marianResources');

//add MarianResources
exports.addMarianResources = async (req, res) => {

    const { title, image, name, details, category, author, habit, lifeSpan } = req.body;
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
        lifeSpan

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