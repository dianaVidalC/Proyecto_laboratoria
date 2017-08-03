var express = require("express");
var api = require("./api");
const app = express();
// var io = require('socket.io')(http);
app.get('/api/news/', function (req, res) {
    let news = api;
    console.log(news);
});
app.use('/', express.static('public'));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

app.listen(process.env.PORT || 3000, () => {
    console.log("Iniciando en puerto 3000");
});
