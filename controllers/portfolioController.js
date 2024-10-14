export const renderProject = async (req, res) => {
  try {
    res.status(202).send("HomePage");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};
