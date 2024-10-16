import Project from "../models/project.js";

/* PROJECT OVERVIEW */
export const renderProject = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render("home", { projects: projects });
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const renderEditProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.render("edit-project", { project: project });
    } else {
      res.redirect("/");
    }
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
    res.render("add-project");
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error");
  }
};

export const addProject = async (req, res) => {
  try {
    const { projectTitle, projectType, overview } = req.body;
    const image = req.file.destination + "/" + req.file.filename;
    await Project.create({
      projectTitle,
      projectType,
      overview,
      image,
    });
    res.redirect("/");
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
