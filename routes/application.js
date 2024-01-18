const router = require('express').Router();
const validateApplicationMiddleware = require("../middleware/validateApplicationMiddleware");
const {getAllApplications, getApplicationsByJobId, postApplication} = require("../controllers/application");


router.get("/", getAllApplications);
router.get("/:jobId", getApplicationsByJobId);
router.post("/", postApplication);


module.exports = router;