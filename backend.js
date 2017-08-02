var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(require('express').static("frontend"));

io.on('connection', function (socket) {
  console.log('a user connected');

  setInterval(function () {
    var data = {
      date: Date()
    };
    socket.emit("sc", JSON.stringify(data));
  }, 2500);

  socket.on('cs', function (data) {
    var obj = JSON.parse(data);
    console.log('message: ' + obj.msg);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

// AJAX //
/*var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/ajax', function (req, res) {
  var json = {
    asd: req.body.cd + " and " + Date()
  }
  res.json(json);
});*/
// AJAX //
