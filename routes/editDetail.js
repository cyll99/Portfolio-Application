import express from "express";
import { editProjectDetail } from "../controllers/portfolioController.js";
import { renderEditPojectDetail } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/:id", renderEditPojectDetail);
router.post("/:id", editProjectDetail);

export default router;
