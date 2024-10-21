import JWT from "jsonwebtoken";
import tokenSignature from "../views/global.js";

global.isLoggedIn = "init";

const auth = (req, res, next) => {
  const token = req.session.token;
  if (req.path === "/logout") {
    global.isLoggedIn = "init";
    console.log("logout", global.isLoggedIn);

    next();
  } else {
    try {
      global.isLoggedIn = "true";
      console.log("try", global.isLoggedIn);

      next();
    } catch (error) {
      if (global.isLoggedIn === "init") {
        console.log("catch", global.isLoggedIn);

        next();
      } else {
        global.isLoggedIn = "false";
        res.redirect("/login");
      }
    }
  }
};

export default auth;
