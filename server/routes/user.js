import express from "express"
import passport from "passport"
import { getAdminUsers, logout, myProfile } from "../controllers/user.js"
import { authorizedAdmin, isAuthenticated } from "../middleware/auth.js"

const router = express.Router()

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}))

router.get("/login",
passport.authenticate("google"),
(req,res,next)=>{
    res.send("Logged In")
})

router.get("/me",isAuthenticated, myProfile)

router.get("/logout",logout)

//Admin routers
router.get("/admin/users",isAuthenticated,authorizedAdmin,getAdminUsers);

export default router