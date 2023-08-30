import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import Allchats from './Allchats';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {io} from 'socket.io-client';

var socket=io.connect('http://192.168.200.100:3000');
export var SocketContext = React.createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketContext.Provider value={socket}>
<BrowserRouter>


<Routes>

<Route path="/" element={<App/>} />
<Route path="/login" element={<Login/>} />
<Route path="/Allchats" element={<Allchats/>} />

</Routes>

</BrowserRouter>
</SocketContext.Provider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
