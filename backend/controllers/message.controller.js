import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; // Receiver's ID from request parameters
    const senderId = req.user._id; // Sender's ID from `protectRoute` middleware

    // Ensure both IDs are ObjectId types
    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);
    const senderObjectId = new mongoose.Types.ObjectId(senderId);

    // Find an existing conversation
    let conversation = await Conversation.findOneAndUpdate(
      {
        participants: { $all: [receiverObjectId, senderObjectId] },
      },
      {},
      { new: true } // Return the updated document if found
    );

    // Create a new conversation if none exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderObjectId, receiverObjectId],
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId: senderObjectId,
      receiverId: receiverObjectId,
      message,
    });

    // Add the message to the conversation's messages array
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SCOKET.IO FUNCTIONALITY

    Promise.all([conversation.save(), newMessage.save()]); // Save the updated message and conversation. the reason we are using Promise.all is because we want to save both the conversation and the message at the same time. This will run in parallel.

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [userToChatId, senderId] },
    }).populate("messages"); //populate is an inbuilt mongodb method. it will give all messages in conversation in form of objects

    if (!conversation) {
      return res.status(200).json([]); //if there is no prior conversation, it will return an empty array. otherwise it might start showing error.
    }

    const messages = conversation.messages;

    res.status(200).json(messages);

  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
