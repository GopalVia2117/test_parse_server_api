const router = require('express').Router();

router.get("/", function (req, res) {
    // console.log(req.query.jobId);
    res.send("List of Jobs");
});



module.exports = router;