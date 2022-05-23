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
