
const express = require('express');
let router = express.Router();
router.get("/", (req, res) => {
    res.render('temperature',{title:"temperature"});
});
module.exports = router;
