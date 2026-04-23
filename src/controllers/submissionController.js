const submissionService = require("../services/submissionService");

const createSubmission = async (req, res, next) => {
  try {
    const submission = await submissionService.createSubmission(req.body);

    res.status(201).json({
      ok: true,
      message: "Formulario guardado correctamente",
      data: submission,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSubmissions = async (req, res, next) => {
  try {
    const submissions = await submissionService.getAllSubmissions();

    res.status(200).json({
      ok: true,
      data: submissions,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSubmission,
  getAllSubmissions,
};