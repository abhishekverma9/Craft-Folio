import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import personalDModel from "../models/personalDetails.js"
import dynamicModel from "../models/dynamicDetails.js"
import cloudinary from "../config/cloudinary.js"
import Message from "../models/message.js"
import nodemailer from "nodemailer";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const register = async (req, res) => {
    const { name, password, email } = req.body
    try {
        //Checking  if user already exists
        const exists = await userModel.findOne({ email, provider: "email" })
        if (exists) {
            return res.json({ success: false, message: "User Already Exists" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            provider: "email"
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const login = async (req, res) => {
    const { password, email } = req.body
    try {
        const user = await userModel.findOne({ email, provider: "email" })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
// Google Login Authentication
const googleLogin = async (req, res) => {
    try {
        const { email, name, gtoken } = req.body;
        let user = await userModel.findOne({ email,provider:"google" });
        if (!user) {
            user = await userModel.create({
                email,
                name,
                provider: "google",
            });
        }
        const token = createToken(user._id);
        res.json({success: true,token,user,gtoken});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
const userPersonalDetails = async (req, res) => {
    const { name, role, bio, email, phone, githubLink, linkedInLink, instaLink } = req.body;
    try {
        // Upload image to Cloudinary
        let profilePic;
        // Only upload if file is provided
        if (req.file) {
            const uploadRes = await cloudinary.uploader.upload(req.file.path);
            profilePic = uploadRes.secure_url;
        }
        const userPersonalData = {
            name,
            role,
            bio,
            email,
            phone,
            githubLink,
            linkedInLink,
            instaLink,
            userId: req.userId,
            profilePic
        };
        let userData
        const existingRecord = await personalDModel.findOne({ userId: req.userId });
        if (existingRecord) {
            userData = await personalDModel.findOneAndUpdate({ userId: req.userId }, userPersonalData, { new: true })
        } else {
            userData = new personalDModel(userPersonalData);
            await userData.save();
        }

        res.json({ success: true, userData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const userDynamicDetails = async (req, res) => {
    const { githubProjLink, title, description, demoLink, techStack, image } = req.body
    try {
        const userDynamicData = {
            githubProjLink,
            title,
            description,
            demoLink,
            techStack,
            userId: req.userId,
            image
        };

        const projectData = new dynamicModel(userDynamicData);
        await projectData.save();
        res.json({ success: true, message: "Project uploaded successfully", projectData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const getPersonalDetails = async (req, res) => {
    try {
        const personalData = await personalDModel.findOne({ userId: req.userId })
        res.json({ success: true, personalData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const getDynamicDetails = async (req, res) => {
    try {
        const dynamicData = await dynamicModel.find({ userId: req.userId })
        res.json({ success: true, dynamicData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const deleteDynamicDetails = async (req, res) => {
    try {
        const { projectId } = req.body
        const dynamicData = await dynamicModel.findByIdAndDelete(projectId)
        if (!dynamicData) {
            return res.json({ success: false, message: "Project not found" })
        }
        res.json({ success: true, message: "Project Deleted" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const userResponse = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        const newMessage = new Message({
            name,
            email,
            phone,
            message,
            userId: req.userId
        })
        const messageData = await newMessage.save()
        // Nodemailer transporter (use your SMTP or Gmail credentials)
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use SMTP config
            auth: {
                user: process.env.ADMIN_EMAIL, // admin email (sender)
                pass: process.env.ADMIN_EMAIL_PASSWORD, // app password or SMTP password
            },
        });

        // Mail options
        const mailOptions = {
            from: `"CraftFolio" <${process.env.ADMIN_EMAIL}>`,
            to: process.env.ADMIN_EMAIL, // admin inbox
            subject: "New Message from Website",
            html: `
        <h2>New User Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Message Sent", messageData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { register, login, googleLogin, userPersonalDetails, userDynamicDetails, getPersonalDetails, getDynamicDetails, deleteDynamicDetails, userResponse }