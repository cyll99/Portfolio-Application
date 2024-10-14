import express from "express";
import { deleteProject } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/:id", deleteProject);

export default router;
