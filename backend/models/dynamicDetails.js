import mongoose from "mongoose";

const dynamicSchema = new mongoose.Schema({
    userId:{type: String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    techStack:{type:String,required:true},
    demoLink:{type:String,required:true},
    githubProjLink:{type:String,required:true}
})

const dynamicModel = mongoose.models.dynamicDetails || mongoose.model("dynamicDetails",dynamicSchema)
export default dynamicModel