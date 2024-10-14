import express from "express";
import home from "./routes/home.js";
import detail from "./routes/details.js";

const app = express();
const PORT = 3000;

app.use("/", home);
app.use("/detail", detail);

app.listen(PORT, () => {
  console.log("Server is running");
});
