"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
let router = express.Router();
router.get("/", (req, res) => {
    res.sendFile('./public/pages/temperature.html', { root: "./" });
    let params = req.params.id;
    console.log(params);
});
module.exports = router;
//# sourceMappingURL=temperatureRoutes.js.map