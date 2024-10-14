import express from "express";
import { renderProjectDetail } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", renderProjectDetail);

export default router;
