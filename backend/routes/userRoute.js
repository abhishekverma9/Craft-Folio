import express from 'express'
import { deleteDynamicDetails, getDynamicDetails, getPersonalDetails, login, register, userDynamicDetails, userPersonalDetails, userResponse } from '../controllers/userController.js'
import auth from '../middlewares/auth.js'
import upload from '../middlewares/multer.js'


const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post('/personal-details',auth,upload.single("profilePic"),userPersonalDetails)
userRouter.post('/dynamic-details',auth,upload.none(),userDynamicDetails)
userRouter.get('/get-details',auth,getPersonalDetails)
userRouter.get('/get-projectDetails',auth,getDynamicDetails)
userRouter.post('/delete-project',auth,deleteDynamicDetails)
userRouter.post('/send-message',auth,upload.none(),userResponse)

export default userRouter