const express = require("express");
const router = express.Router();

const submissionController = require("../controllers/submissionController");
const validateSubmission = require("../middlewares/validateSubmission");

router.post("/", validateSubmission, submissionController.createSubmission);
router.get("/", submissionController.getAllSubmissions);

module.exports = router;