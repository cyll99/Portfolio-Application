import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectTitle: {
    required: true,
    type: String,
  },

  projectType: {
    required: true,
    type: String,
  },

  overview: {
    required: true,
    type: String,
  },

  image: {
    required: true,
    type: String,
  },
});

const Project = mongoose.model("Project", projectSchema, "projects");

export default Project;
