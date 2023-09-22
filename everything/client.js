const socket = io('ws://localhost:3000');

var firstPlayer;

socket.on("newGame", (data) => {
    $("#roomID").text("Room ID: " + data.roomID);
    $("#p1").text("Player 1: " + data.uname);
    $("#hostLayout").slideUp(100, () => {
        $("#userLayout").slideDown(300);
    });
});

async function roomCreate(){
    let username = $("#username").val().trim();
    if (await usernameCheck(username)) {
        firstPlayer = true;
        socket.emit("createRoom", {uname:username});
    }
    else return;
};

async function roomJoin(){
    let roomPrompt = $("#roomPrompt").val();
    let username = $("#userPrompt").val().trim();
    if (roomPrompt.length != 5){
        alert("Invalid Room ID!");
        return;
    }
    if (await usernameCheck(username)) {
        firstPlayer = false;
        socket.emit("joinRoom", {uname:username, roomID:roomPrompt})
    }
}


async function usernameCheck(username){
    username = username.replaceAll(" ", "");
    const filter = ["badword", "terribleword"];
    if (username == ""){
        alert("Please enter a valid username!")
        return;
    } 
    if (filter.includes(username)) {
        $("#username").val("Really?"); 
        return false;
    }
    else return true;
}

async function hostUp(){
    $("#buttonLayouts").slideUp(100, () => {
        $("#hostLayout").slideDown(275);
    });
}

async function joinUp(){
    $("#buttonLayouts").slideUp(100, () => {
        $("#joinLayout").slideDown(275);
    });
}
