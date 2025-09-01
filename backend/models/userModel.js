import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true},
    password: {type: String,
        required: function () {
        return this.provider === "email"; // only required for email login users
      },
    },
    provider: { type: String, enum: ["google", "email"], required: true },
},{minimize: false})

userSchema.index({ email: 1, provider: 1 }, { unique: true });
const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel