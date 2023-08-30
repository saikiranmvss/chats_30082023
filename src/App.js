import './App.css';
import { useSearchParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {SocketContext} from './index';
import $ from 'jquery';
import socket from './socket';

function App() {

  function sendMessage(){
    var message=$('#message').val();

    socket.emit('recieve_msg',[id,message]);

  }

  const [searchParams, setSearchParams] = useSearchParams();
  var id=searchParams.get('id');
  var sockets=JSON.parse(localStorage.getItem('socket_ids'));
  
  socket.off('send_msg').on('send_msg',function(data){
    console.log(data);
  })

  return (
<section style={{backgroundColor:'#eee'}}>
        <div className="card" id="chat2">

          <div className="card-header chatwindow-header d-flex justify-content-between align-items-center p-3">
            <h5 className="mb-0">Chat</h5>
          </div>

          <div className="card-body chatwindow-body" data-mdb-perfect-scrollbar="true">

            <div className="d-flex flex-row justify-content-start">
              <div>
                <p className="small p-2 ms-3 mb-1 rounded-3 message-receive">Hi</p>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
              </div>
            </div>
            
          </div>

          <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3 message-box">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
              alt="avatar 3" style={{width: "40px", height:" 100%" }}/>
            <input type="text" className="form-control form-control-lg" id="message"
              placeholder="Type message" />
            <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
            <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
            <a className="ms-3" href="#!" onClick={sendMessage}><i className="fas fa-paper-plane"></i></a>
          </div>


        </div>
</section>
  );
}

export default App;
