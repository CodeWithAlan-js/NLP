import messageModel from "../models/messageModel.js";

export const getMessages = async (_, res) => {
    const messages = await messageModel.find();
    res.send(messages);
}

export const createMessage = async (req, res) => {
    const message = new messageModel(req.body);
    await message.save();
    console.log("message created successfully");
    res.send(message);
}

export const deleteMessage = async (req, res) => {
    await messageModel.findByIdAndDelete(req.params.id);
    console.log("message deleted successfully");
    res.send("Message deleted successfully");
}