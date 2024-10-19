import User from "../models/user.js";
import bcrypt from "bcrypt";

export const renderLoginPage = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    User.fetchUserByUsername(userName).then((credentials) => {
      if (bcrypt.compare(password, credentials.password)) {
        res.redirect("/");
      } else {
        res.redirect("/login");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const renderSignup = async (req, res) => {
  try {
    res.render("sign-up");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const signup = async (req, res) => {

  const { userName, password, confirmPassword } = req.body;
  console.log(userName);
  
  
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await User.insertUser({ userName, password:hashPassword });
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const logout = (req, res) => {
  res.redirect("/");
};
