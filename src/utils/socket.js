// src/utils/socket.js
import io from 'socket.io-client';

const socket = io('http://your-backend-socket-url.com');

export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};

export const receiveMessages = (callback) => {
  socket.on('receiveMessage', (message) => {
    callback(message);
  });
};