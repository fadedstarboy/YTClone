import { Router } from "express";
import { loggedOutUser, loginUser, registerUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js"   
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1
    },{
        name: "coverImage",
        maxCount: 1
    }]),
    registerUser)


router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, loggedOutUser)

router.route("/refreshtoken").post(refreshAccessToken)

router.route("/changepassword").post(verifyJWT, changeCurrentPassword)

router.route("/currentuser").get(verifyJWT, getCurrentUser)

router.route("/updateaccount").patch(verifyJWT, updateAccountDetails)

router.route("/updateavatar").patch(verifyJWT, upload.single("avatar"), updateAccountDetails)

router.route("/updatecover").patch(verifyJWT, upload.single("coverImage"), updateAccountDetails)



export default router