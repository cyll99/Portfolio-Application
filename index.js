import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import mongoose from "mongoose";
import home from "./routes/home.js";
import detail from "./routes/details.js";
import editProject from "./routes/editProject.js";
import addProject from "./routes/addProject.js";
import deleteProject from "./routes/deleteProject.js";
import editDetail from "./routes/editDetail.js";

const dbString = "mongodb://localhost:27017/portfolio";

mongoose
  .connect(dbString)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.error(err));

const app = express();
const PORT = 3000;

/* SETTING THE TEMPLATING ENGINE */
app.set("view engine", "ejs");
app.set("views", "views");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const date = new Date().toISOString().replace(/:/g, "-");
    cb(null, date + "-" + file.originalname);
  },
});

app.use(multer({ storage }).single("image"));

app.use("/", home);
app.use("/detail", detail);
app.use("/edit-project", editProject);
app.use("/add-project", addProject);
app.use("/delete-project", deleteProject);
app.use("/edit-detail", editDetail);

// Get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname)));
app.listen(PORT, () => {
  console.log("Server is running");
});
