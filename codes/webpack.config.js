var webpack = require("webpack");
var path = require("path");
module.exports={
   devtool:'eval-source-map',
   entry:'./js/main.js',
   outpath:{
      path: path.resolve(__dirname, "build"),
      pubilcPath:"assets",
      filename:"bundle.js"
   }
}