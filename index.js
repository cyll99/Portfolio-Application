import express from "express";
import home from "./routes/home.js";
import detail from "./routes/details.js";
import editProject from "./routes/editProject.js";
import addProject from "./routes/addProject.js";

const app = express();
const PORT = 3000;

app.use("/", home);
app.use("/detail", detail);
app.use("/edit-project", editProject);
app.use("/add-project", addProject);

app.listen(PORT, () => {
  console.log("Server is running");
});
