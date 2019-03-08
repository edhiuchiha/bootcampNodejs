var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    // controller = require('./controller/controller');

var cors=require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var morgan = require('morgan');

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var batchRouter = require('./router/BatchRouter');
batchRouter(app);

var traineeRoute = require('./router/TraineeRouter');
traineeRoute(app);

var trainerRoute = require('./router/TrainerRouter');
trainerRoute(app);

var studyPeriod = require('./router/StudyPeriodRouter');
studyPeriod(app);

var studyMaterial = require('./router/StudyMaterialRouter');
studyMaterial(app);

var bootcampPeriod = require('./router/BootcampPeriodRouter');
bootcampPeriod(app);

var bootcampMaterial = require('./router/BootcampMaterialRouter');
bootcampMaterial(app);
app.listen(port);
console.log('Hai ...  :) ' +
    'Index.JS Bootcamp App , RESTful API server started on: ' + port);

morgan('combined', {
    skip: function (req, res) { return res.statusCode < 400 }
})