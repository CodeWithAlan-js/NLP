import messageModel from "../models/messageModel.js";
import detectMood from "../detectMood.js";

export const getMessages = async (_, res) => {
    const messages = await messageModel.find();
    res.send(messages);
}

export const createMessage = async (req, res) => {
    const { message } = req.body;
    const mood = detectMood(message);
    const newMessage = new messageModel({ message, mood });
    await newMessage.save();
    res.send(newMessage);
}

export const deleteMessage = async (req, res) => {
    await messageModel.findByIdAndDelete(req.params.id);
    res.send("Message deleted successfully");
}