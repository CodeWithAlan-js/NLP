import messageModel from "../models/messageModel.js";

export const getMessages = async (_, res) => {
    const messages = await messageModel.find();
    res.send(messages);
}

export const createMessage = async (req, res) => {
    const message = new messageModel(req.body);
    if (!message.message) {
        res.status(400).send("Message is required");
    }
    await message.save();
    res.send(message);
}

export const deleteMessage = async (req, res) => {
    await messageModel.findByIdAndDelete(req.params.id);
    res.send("Message deleted successfully");
}