//require

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');



//using require
const app = express();
const port = 5000;
const filePath = path.join(__dirname); 

app.use(bodyParser.urlencoded({ extended: true }))
// Static route for files in the current directory...
// Note that this serves all files relative to the given
// path, even ones you probably don't want.
app.use(express.static(__dirname));

// Note: you should really put these files in a subdirectory
// And use static like this:




app.get('/index', (req, res)=> {
  res.sendFile(filePath+"/index.html");
});
app.get('/app', (req, res)=> {
    res.sendFile(filePath+"/app.html");
  });
  


app.listen(port, () => {
    console.log(`App running on port dffdg ${port}.`)
  })