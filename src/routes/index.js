const express = require("express");
const router = express.Router();

const submissionRoutes = require("./submissionRoutes");

router.use("/submissions", submissionRoutes);

module.exports = router;