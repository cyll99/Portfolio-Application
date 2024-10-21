import express from "express";
import { renderLoginPage } from "../controllers/userAuthController.js";
import { renderSignup } from "../controllers/userAuthController.js";
import { logout } from "../controllers/userAuthController.js";
import { login } from "../controllers/userAuthController.js";
import { signup } from "../controllers/userAuthController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/login", renderLoginPage);
router.post("/login", auth, login);
router.get("/sign-up", renderSignup);
router.post("/sign-up", auth, signup);
router.get("/logout", auth, logout);

export default router;
