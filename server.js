var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var PORT = 3000;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/surveys', require('./api/survey'));

app.listen(PORT, function () {
  console.log(`Server Running on PORT ${PORT}`);
})