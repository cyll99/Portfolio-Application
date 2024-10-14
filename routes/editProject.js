import express from "express";
import { editProject } from "../controllers/portfolioController.js";
import { renderEditProject } from "../controllers/portfolioController.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.get("/:id", renderEditProject);
router.post("/:id", editProject);

export default router;
