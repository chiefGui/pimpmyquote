var express       = require('express')
    , exphbs      = require('express-handlebars')
    , app         = express();

app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
  response.render('index');
});

app.use('/static', express.static(__dirname + '/static'));
app.use('/vendor', express.static(__dirname + '/vendor'));

var server = app.listen(4000, function () {
  console.log('Listening on port %d', server.address().port);
});