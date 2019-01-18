var home = require('../controllers/home.js');
var path = require('path');
module.exports = function(app){

    app.get('/api', function(req, res) {
        home.get(req,res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}