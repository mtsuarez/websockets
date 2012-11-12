var app = requiered('http').createServer(handler)
, io = require('socket.io').listen(app)
, fs = requiere('fs')

app.listen(process.env.PORT || 8001);

function handler (req, res)
{
fs.readFile('index.html', 
     function(err, data)
             { 
               if (err) {
                          res.writeHead(500);
                          return res.end('Error al cargar index.html');
                        }

      res.writeHead(200, {'content-type': 'text/html', "Content-Length": data.length });
      res.end(data);
     }); }

io.socket.on('connection', funtion (socket)
{
  socket.on('message', function(data)
                       { 
                         console.info(data);
                         socket.send("[ECHO] " + data);
  });});
