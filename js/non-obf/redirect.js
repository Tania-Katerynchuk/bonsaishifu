/* Const */
const timer = document.getElementById("timer")
const compass = document.getElementById("redirect-fa-compass")
const link = document.getElementById("redirect-link")

/* Event listener */
compass.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "rotateFullRight360") {
            compass.style.animation = "rotateFullLeft360 1s forwards"
        }
    }
})

/* Flow */
function setRedirectLink() {
    link.href = window.location.protocol + "//" + window.location.host
}

function startToRedirect() {
    compass.style.animation = "rotateFullRight360 4s forwards"
    setInterval(function() {
        timer.innerText = "Повернення на сайт через " + (timer.innerText.replace(/[^0-9]/g, '') - 1) + ".."
        if (timer.innerText.replace(/[^0-9]/g, '') == 0) {
            window.location = window.location.protocol + "//" + window.location.host
        }
    }, 1000)
}

function main() {
    setRedirectLink()
    startToRedirect()
}

main()