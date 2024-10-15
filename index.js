import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import home from "./routes/home.js";
import detail from "./routes/details.js";
import editProject from "./routes/editProject.js";
import addProject from "./routes/addProject.js";
import deleteProject from "./routes/deleteProject.js";
import editDetail from "./routes/editDetail.js";

const app = express();
const PORT = 3000;

/* SETTING THE TEMPLATING ENGINE */
app.set("view engine", "ejs");
app.set("views", "views");

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
