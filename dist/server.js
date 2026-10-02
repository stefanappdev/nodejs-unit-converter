"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const server = express();
let lengthRoutes = require('./routes/length/lengthRoutes.js');
let temperatureRoutes = require('./routes/temperature/temperatureRoutes.js');
let path = require('path');
const PORT = 8000;
server.use(express.static(path.join(__dirname, "public")));
server.get("/", (req, res) => {
    let params = req.params.id;
    console.log(params);
    res.sendFile('./public/pages/index.html', { root: "./" });
});
server.use("/length", lengthRoutes);
server.use("/temperature", temperatureRoutes);
server.listen(PORT, () => {
    console.log("server is running on port:", PORT);
});
//# sourceMappingURL=server.js.map