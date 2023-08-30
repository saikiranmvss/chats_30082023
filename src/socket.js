import {io} from 'socket.io-client';

export const initializeSocket = () => {
    const socket=io.connect('http://192.168.0.144:9999');
return socket;
};
