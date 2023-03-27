/* Const */
const footerItem1 = document.getElementById('footer-item1')
const footerItem2 = document.getElementById('footer-item2')
const footerItem3 = document.getElementById('footer-item3')
// const footerItem4 = document.getElementById('footer-item4')
// const footerAddress = document.getElementById('footer-address')
const footerTel = document.getElementById('footer-tel')
const footerEmail = document.getElementById('footer-email')
const footerWorkTime1 = document.getElementById('footer-work-time1')
const footerWorkTime2 = document.getElementById('footer-work-time2')

/* Var */
var footerItemWasInViewport = true

/* Event listener */
window.addEventListener('scroll', function () {
    animateFooterOnScroll()
})

window.addEventListener('resize', function () {
    animateFooterOnScroll()
})

footerItem1.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromBottom") {
        footerItem1.style.opacity = 1

        setTimeout(function() {
            footerItem2.style.animation = "translateFromBottom 0.25s forwards"
        }, 100)
    }
})

footerItem1.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromBottom") {
            footerItem1.style.animation = ""
        }
    }
})

footerItem2.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromBottom") {
        footerItem2.style.opacity = 1

        setTimeout(function() {
            footerItem3.style.animation = "translateFromBottom 0.25s forwards"
        }, 100)
    }
})

footerItem2.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromBottom") {
            footerItem2.style.animation = ""
        }
    }
})

footerItem3.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromBottom") {
        footerItem3.style.opacity = 1

        // setTimeout(function() {
        //     footerItem4.style.animation = "translateFromBottom 0.25s forwards"
        // }, 100)
    }
})

footerItem3.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromBottom") {
            footerItem3.style.animation = ""
        }
    }
})

// footerItem4.addEventListener("animationstart", function(anim) {
//     if (anim.animationName == "translateFromBottom") {
//         footerItem4.style.opacity = 1
//     }
// })

// footerItem4.addEventListener("animationend", function(anim) {
// if (anim.target === this) {
//     if (anim.animationName == "translateFromBottom") {
//         footerItem4.style.animation = ""
//     }
// }
// })

/* Help functionality */
function animateFooterOnScroll() {
    if (isInViewport(footerItem1)) {
        if (!footerItemWasInViewport) {
            footerItem1.style.animation = "translateFromBottom 0.25s forwards"
            footerItemWasInViewport = true
        }
    } else {
        if (footerItem1.style.animation !== "0.25s ease 0s 1 normal forwards running translateFromBottom") {
            footerItemWasInViewport = false
            footerItem1.style.opacity = 0
            footerItem2.style.opacity = 0
            footerItem3.style.opacity = 0
            // footerItem4.style.opacity = 0
        }
    }
}

/* Flow */
async function loadFooterText() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    // footerAddress.innerHTML += '<i class="fa-solid fa-location-dot footer-fa-text-custom"></i>' + data.contact[0].address
    footerTel.innerHTML += '<i class="fa-solid fa-phone footer-fa-text-custom"></i>' + data.contact[0].phone
    footerEmail.innerHTML += '<i class="fa-solid fa-envelope footer-fa-text-custom"></i>' + data.contact[0].email
    footerWorkTime1.innerHTML += '<i class="fa-solid fa-clock footer-fa-text-custom"></i>' + JSON.parse(data.contact[0].work_time)[0]
    footerWorkTime2.innerHTML += '<i class="fa-solid fa-clock footer-fa-text-custom"></i>' + JSON.parse(data.contact[0].work_time)[1]
}

function main() {
    loadFooterText()
}

main()