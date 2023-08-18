/* Const */
const contactTitle = document.getElementById('contact-title')
const contactGrid = document.getElementById('contact-grid')
const contactNext = document.getElementById('contact-next')
const contactTel = document.getElementById('contact-tel')
const contactEmail = document.getElementById('contact-email')
const contactWorkTime1 = document.getElementById('contact-work-time1')
const contactWorkTime2 = document.getElementById('contact-work-time2')
// const contactAddress = document.getElementById('contact-address')
// const contactMap = document.getElementById('contact-map')

/* Var */
var contactTitleWasInViewport = true
var contactGridWasInViewport = true
// var contactMapWasInViewport = true

/* Event listener */
window.addEventListener('scroll', function () {
    animateContactOnScroll()
})

window.addEventListener('resize', function () {
    animateContactOnScroll()
})

contact.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            contactTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromLeft") {
            contactTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromRight") {
            contactTitle.classList.add('underline')
        }

        if (anim.animationName == "translateToLeft") {
            contactTitle.classList.remove('underline')
        }

        if (anim.animationName == "translateToRight") {
            contactTitle.classList.remove('underline')
        }
    }
})

contactTitle.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        contactTitleWasInViewport = true
    }
})

contactTitle.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            contactTitle.style.animation = ""
            contactTitle.classList.add('underline')
        }
    }
})

contactGrid.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        contactGridWasInViewport = true
    }
})

contactGrid.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            contactGrid.style.animation = ""
            contactGrid.classList.add('underline')
        }
    }
})

// contactMap.addEventListener("animationstart", function(anim) {
//     if (anim.animationName == "translateFromRight") {
//         contactMapWasInViewport = true
//     }
// })

// contactMap.addEventListener("animationend", function(anim) {
// if (anim.target === this) {

//     if (anim.animationName == "translateFromRight") {
//         contactMap.style.animation = ""
//         contactMap.classList.add('underline')
//     }
// }
// })

/* Help functionality */
function animateContactOnPanelCollapsed() {
    if (!contactTitleWasInViewport) {
        contactTitle.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!contactGridWasInViewport) {
        contactGrid.style.animation = "translateFromLeft 0.5s forwards"
    }

    // if (!contactMapWasInViewport) {
    //     contactMap.style.animation = "translateFromRight 0.5s forwards"
    // }
}

function animateContactOnScroll() {
    if (isInViewport(contactTitle)) {
        if (contact.style.display == "none") {
            contactTitleWasInViewport = true
            contactTitle.style.animation = ""
        }

        if (!contactTitleWasInViewport) {
            contactTitle.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        contactTitle.classList.remove('underline')

        if (isInViewportX(contactTitle)) {
            contactTitleWasInViewport = false
        }
    }

    if (isInViewport(contactGrid)) {
        if (contact.style.display == "none") {
            contactGridWasInViewport = true
            contactGrid.style.animation = ""
        }

        if (!contactGridWasInViewport) {
            contactGrid.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        if (isInViewportX(contactGrid)) {
            contactGridWasInViewport = false
        }
    }

    // if (isInViewport(contactMap)) {
    //     if (contact.style.display == "none") {
    //         contactMapWasInViewport = true
    //         contactMap.style.animation = ""
    //     }

    //     if (!contactMapWasInViewport) {
    //         contactMap.style.animation = "translateFromRight 0.5s forwards"
    //     }
    // } else {
    //     if (isInViewportX(contactMap)) {
    //         contactMapWasInViewport = false
    //     }
    // }
}

/* Flow */
function setContactNext() {
    contactNext.value = window.location.href + "redirect"
}

function startupContactAnim() {
    if (contactTitleWasInViewport && contact.style.display == "block") {
        contactTitle.classList.add('underline')
    }
}

async function loadContactText() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    contactTel.innerHTML += data.contact[0].phone + '<i class="fa-solid fa-phone contact-left-fa"></i>'
    contactEmail.innerHTML += data.contact[0].email + '<i class="fa-solid fa-envelope contact-left-fa"></i>'
    contactWorkTime1.innerHTML += JSON.parse(data.contact[0].work_time)[0] + '<i class="fa-solid fa-clock contact-left-fa"></i>'
    contactWorkTime2.innerHTML += JSON.parse(data.contact[0].work_time)[1]  + '<i class="fa-solid fa-clock contact-left-fa"></i>'
    // contactAddress.innerHTML += data.contact[0].address + '<i class="fa-solid fa-signs-post contact-right-fa"></i>'
}

function main() {
    loadContactText()
    setContactNext()
    startupContactAnim()
}

main()