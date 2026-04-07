import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// the above routes are all POST because they are changing the state of the server (creating a user, creating a session, deleting a session), if they were GET, they would be idempotent and not change the state of the server

export default router;
