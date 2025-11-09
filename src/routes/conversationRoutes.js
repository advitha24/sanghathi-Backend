import { Router } from "express";
import Conversation from "../models/Conversation.js";

const router = Router();

// ✅ Get all conversations
router.get("/", async (req, res) => {
  try {
    const conversations = await Conversation.find();
    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ Create new conversation for a user
router.post("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      conversationId: req.params.userId,
    });

    if (conversation) {
      return res.status(400).json({ message: "Conversation already exists" });
    }

    const newConversation = new Conversation({
      conversationId: req.params.userId,
      status: "active",
    });

    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ Get conversation of a specific user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      conversationId: req.params.userId,
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ New route: Mentor–Mentee Offline Conversation
router.post("/mentor-mentee", async (req, res) => {
  try {
    const { mentorId, menteeId, moocChecked, projectChecked, summary } = req.body;

    if (!menteeId || !summary || summary.length < 30) {
      return res
        .status(400)
        .json({ message: "Mentee and valid summary (min 30 chars) required" });
    }

    const newMentorMenteeConv = new Conversation({
      mentorId,
      menteeId,
      moocChecked,
      projectChecked,
      summary,
      date: new Date(),
    });

    const savedConv = await newMentorMenteeConv.save();
    res.status(201).json({
      message: "Mentor–Mentee conversation saved successfully",
      data: savedConv,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating mentor–mentee conversation", err });
  }
});

export default router;
