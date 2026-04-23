const { Submission } = require("../models");

const createSubmission = async (data) => {
  const nuevaSubmission = await Submission.create(data);
  return nuevaSubmission;
};

const getAllSubmissions = async () => {
  const submissions = await Submission.findAll({
    order: [["createdAt", "DESC"]],
  });

  return submissions;
};

module.exports = {
  createSubmission,
  getAllSubmissions,
};