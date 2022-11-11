const Event = require("../Model/Event");

exports.addEvent = async (req, res) => {
    try {
        const event = new Event(req.body)
        await event.save()
        res.send(event)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getOneEvent = async (req, res) => {
    try {
        const { pid } = req.body
        const event = await Event.findById(pid)
        res.send(event)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getAllEvent = async (req, res) => {
    try {

        const events = await Event.find()
        res.send(events)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.updateEvent = async (req, res) => {
    try {
        const { pid } = req.body.pid
        const { newob } = req.body.newob
        const newevent = await Event.findByIdAndUpdate({ pid, newob })
        res.send(newevent)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getMyEvents = async (req, res) => {
    try {
        const { uid } = req.body.pid
        const events = await Event.find({ uid })
        res.send(events)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

