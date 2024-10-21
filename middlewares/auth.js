import JWT from "jsonwebtoken";
import tokenSignature from "../views/global.js";

global.isLoggedIn = "init";

const auth = (req, res, next) => {
  const token = req.session.token;
  if (req.path === "/logout") {
    global.isLoggedIn = "init";

    next();
  } else {
    try {
      global.isLoggedIn = "true";

      next();
    } catch (error) {
      if (global.isLoggedIn === "init") {

        next();
      } else {
        global.isLoggedIn = "false";
        res.redirect("/login");
      }
    }
  }
};

export default auth;
