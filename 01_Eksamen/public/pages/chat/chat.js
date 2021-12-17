var socket = io();
let username = localStorage.getItem("username")

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

const currentRoom = location.href.substring(27);
socket.emit('join-room', currentRoom)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', `${username}: ${input.value}`, currentRoom);
        input.value = '';
    }
});

socket.on('connect', () => {
    socket.emit('chat message', `${username} joined the chat`, currentRoom, username)
    window.scrollTo(0, document.body.scrollHeight);
})

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('disconnect', () => {
    socket.emit('chat message', `${username} left the chat`, currentRoom)
    window.scrollTo(0, document.body.scrollHeight);
})