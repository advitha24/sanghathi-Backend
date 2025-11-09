import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  conversationId: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
  },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  menteeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  moocChecked: {
    type: Boolean,
    default: false,
  },
  projectChecked: {
    type: Boolean,
    default: false,
  },
  summary: {
    type: String,
    minlength: 30,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;



