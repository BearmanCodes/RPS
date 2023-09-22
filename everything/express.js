var express = require("express");
var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io')(http, {
    cors: { origin: "*" }
});

var players = {

};

app.use(express.static("../everything"));

io.on('connection', socket => {
    console.log("connected");
    socket.on("createRoom", data => {
        const roomID = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        socket.join(roomID);
        players[roomID] = data.uname;
        socket.emit("newGame", {roomID:roomID, uname:data.uname});
    });
    socket.on("joinRoom", (data) => {
        socket.join(data.roomPrompt)
        socket.to(data.roomID).emit("player2Joined",{p2name: data.name,p1name:players[data.roomID]});
        socket.emit("player1Joined",{p2name:players[data.roomID],p1name:data.name});
    })
})


http.listen(3000, function() {
    console.log("Hey what's up");
});