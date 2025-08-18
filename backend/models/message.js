import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    userId:{ type: String, required: true},
    name:{ type: String, required: true},
    email:{ type: String, required: true},
    phone:{ type: String, required: true},
    message:{ type: String, required: true}
},{minimize: false})

const Message = mongoose.models.message || mongoose.model("message",MessageSchema)

export default Message 