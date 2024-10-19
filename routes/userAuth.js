import express from "express";
import { renderLoginPage } from "../controllers/userAuthController.js";
import { renderSignup } from "../controllers/userAuthController.js";
import { logout } from "../controllers/userAuthController.js";
import { login } from "../controllers/userAuthController.js";
import { signup } from "../controllers/userAuthController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/login", renderLoginPage);
router.post("/login", login);
router.get("/sign-up", renderSignup);
router.post("/sign-up", signup);
router.get("/logout", logout);

export default router;
