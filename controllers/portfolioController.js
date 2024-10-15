/* PROJECT OVERVIEW */
export const renderProject = async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const renderEditProject = async (req, res) => {
  try {
    res.status(202).send("EditProjectPage");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const editProject = async (req, res) => {
  try {
    res.status(202).send("EditProject");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const renderAddProject = async (req, res) => {
  try {
    res.status(202).send("AddProjectPage");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const addProject = async (req, res) => {
  try {
    res.status(202).send("AddProject");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const deleteProject = async (req, res) => {
  try {
    res.status(202).send("DeleteProject");
  } catch (error) {
    console.error(error);
    res.send(500).redirect("/error");
  }
};

/* PROJECT DETAILS */
export const renderProjectDetail = async (req, res) => {
  try {
    res.status(200).send("DetailPage");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const renderEditPojectDetail = async (req, res) => {
  try {
    res.status(200).send("EditProjectDetailPage");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const editProjectDetail = async (req, res) => {
  try {
    res.send(200).send("EditProjectDetail");
  } catch (error) {
    res.status(500).redirect("/error");
  }
};
