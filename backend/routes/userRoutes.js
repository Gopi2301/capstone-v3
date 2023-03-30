import express from "express";
const router = express.Router()
import registeredUser, { authUser } from "../controllers/userControllers.js";

router.route("/").post(registeredUser);
router.post("/login",authUser)
export default router;