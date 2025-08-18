import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
    userId:{type: String,required:true},
    profilePic:{type:String,required:true},
    name:{type:String,required:true},
    role:{type:String,required:true},
    bio:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    githubLink:{type:String,required:true},
    linkedInLink:{type:String,required:true},
    instaLink:{type:String,required:true} 
})

const personalDModel = mongoose.models.personalDetails || mongoose.model("personalDetails",personalDetailsSchema)
export default personalDModel