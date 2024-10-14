import express from "express";
import { renderAddProject } from "../controllers/portfolioController.js";
import { addProject } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", renderAddProject);
router.post("/", addProject);

export default router;
