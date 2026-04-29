const { Submission } = require("../models");

const createSubmission = async (data) => {
  const nuevaSubmission = await Submission.create(data);
  try {
    await notionService.createContactInNotion(data);
  } catch (error) {
    console.error("Error al enviar a Notion:", error.message);
  }
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