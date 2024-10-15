import express from "express";
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

app.listen(PORT, () => {
  console.log("Server is running");
});
