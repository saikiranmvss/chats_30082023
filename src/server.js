var express = require('express');
var http = require('http');
var session=require('express-session');
var app=express();
var server= http.createServer(app);
const cors = require("cors");
var { Server } = require('socket.io');
const PORT = process.env.PORT || 9999;
var lib=require('./functions.js');
var database= new lib.databases();
var socket_ids=[];
var socket_id='';

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin: '*'
}));
app.use(cors({
  origin: 'http://192.168.0.144:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

const io= new Server(server,{
  cors:{
    origin:"http://192.168.0.144:3000",
    method:['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  },
});


app.post('/validate',async(req,res)=>{

  var validate=await database.validate(req.body.email,req.body.password);
  socket_ids[validate.user_id]=socket_id;
  console.log(socket_ids);
  res.json({msg:'success',sockets:socket_ids});

})

io.on('connection', (socket) => {   

  socket_id=socket.id; 
  console.log(socket.id);

  socket.on('recieve_msg',function(data){
    console.log(socket_ids);
  socket.to(socket_ids[data[0]]).emit('send_msg',data[1]);

  })

})

server.listen(9999,()=>{
  console.log( "Backend Listening to the port "+PORT );
})