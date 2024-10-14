import express from "express";
import home from "./routes/home.js";

const app = express();
const PORT = 3000;

app.use("/", home);

app.listen(PORT, () => {
  console.log("Server is running");
});
