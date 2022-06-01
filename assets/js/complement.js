window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        console.log("yeah");
        document.getElementById("header").style.backgroundColor = "#303841";
        document.getElementById("header").style.padding = "1em 2em";
    } else {
        console.log("yeah");
        document.getElementById("header").style.backgroundColor = "";
        document.getElementById("header").style.padding = "1em 2em";
    }
}

function alertFunc(clicked_id) {
    if (
        confirm(
            "You are about to schedule a session with " +
                clicked_id +
                ".\nDo you wish to proceed?"
        )
    ) {
        alert("You succefully scheduled a session with " + clicked_id);
        window.location = "index.html";
    } else {
    }
}

function alertFunc2(clicked_id) {
    if (
        confirm(
            "Do you really want to send a message to " +
                clicked_id +
                ".\nDo you wish to proceed?"
        )
    ) {
        window.location = "chat.html";
    } else {
    }
}

function openPopUp(clicked_id) {
    document.getElementById("choice-overlay").style.display = "flex";
    document.getElementById("teacher-name").innerHTML =
        clicked_id + " for this day?";
}

function closePopUp() {
    document.getElementById("choice-overlay").style.display = "none";
}

function confirmSchedule() {
    closePopUp();
    document.getElementById("choice-overlay-2").style.display = "flex";
    setTimeout(redirectToMain, 2500);
}

function redirectToMain() {
    window.location = "index.html";
}

/*-----------------------------------------------------*/
function openPopUp2(clicked_id) {
    document.getElementById("choice-overlay").style.display = "flex";
    document.getElementById("teacher-name").innerHTML = clicked_id + "?";
        
}

function redirectToChat() {
    window.location = "chat.html";
}

function confirmSchedule2() {
    closePopUp();
    setTimeout(redirectToChat, 500);
}
