export const renderLoginPage = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const login = async (req, res) => {
  try {
    res.redirect("/");
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
  try {
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const logout = (req, res) => {
  res.redirect("/");
};

