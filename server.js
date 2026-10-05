
const express = require('express');
const server = express();

let lengthRoutes = require('./routes/length/lengthRoutes.js');
let temperatureRoutes = require('./routes/temperature/temperatureRoutes.js');
let path = require('path');

const PORT = 8000;
server.use(express.static(path.join(__dirname, "public")));
server.use(express.static(path.join(__dirname, "public/styles")));
server.set('view engine','ejs');
server.set('views','./views')

server.get("/", (request,response) => {
    response.render('index',{title:"home"});
});

server.use("/length", lengthRoutes);
server.use("/temperature", temperatureRoutes);

server.use((req,res,next)=>{
    res.status(404).render('404',{title:"404 page"}) 
})

server.listen(PORT, () => {
    console.log("server is running on port:", PORT);
});
