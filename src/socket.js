import {io} from 'socket.io-client';

var socket=io.connect('http://192.168.0.144:9999');

export default socket;
