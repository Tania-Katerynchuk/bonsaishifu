/* Const */
const infoTitle = document.getElementById('info-title')
const infoText = document.getElementById('info-text')
const miniGallery = document.getElementById('mini-gallery-grid')
const infoGrid = document.getElementById('info-grid')

/* Var */
var infoTitleWasInViewport = true
var infoTextWasInViewport = true
var miniGalleryWasInViewport = true
var infoGridWasInViewport = true

/* Event listener */
window.addEventListener('scroll', function () {
    animateInfoOnScroll()
})

window.addEventListener('resize', function () {
    animateInfoOnScroll()
})

info.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            infoTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromLeft") {
            infoTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromRight") {
            infoTitle.classList.add('underline')
        }

        if (anim.animationName == "translateToLeft") {
            infoTitle.classList.remove('underline')
        }

        if (anim.animationName == "translateToRight") {
            infoTitle.classList.remove('underline')
        }
    }
})

infoTitle.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        infoTitleWasInViewport = true
    }
})

infoTitle.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            infoTitle.style.animation = ""
            infoTitle.classList.add('underline')
        }
    }
})

infoText.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        infoTextWasInViewport = true
    }
})

infoText.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            infoText.style.animation = ""
        }
    }
})

miniGallery.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        miniGalleryWasInViewport = true
    }
})

miniGallery.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            miniGallery.style.animation = ""
        }
    }
})

infoGrid.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        infoGridWasInViewport = true
    }
})

infoGrid.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            infoGrid.style.animation = ""
        }
    }
})

/* Help functionality */
function animateInfoOnPanelCollapsed() {
    if (!infoTitleWasInViewport) {
        infoTitle.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!infoTextWasInViewport) {
        infoText.style.animation = "translateFromLeft 0.5s forwards"
    }

    if (!miniGalleryWasInViewport) {
        miniGallery.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!infoGridWasInViewport) {
        infoGrid.style.animation = "translateFromLeft 0.5s forwards"
    }
}

function animateInfoOnScroll() {
    if (isInViewport(infoTitle)) {
        if (info.style.display == "none") {
            infoTitleWasInViewport = true
            infoTitle.style.animation = ""
        }

        if (!infoTitleWasInViewport) {
            infoTitle.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        infoTitle.classList.remove('underline')

        if (isInViewportX(infoTitle)) {
            infoTitleWasInViewport = false
        }
    }

    if (isInViewport(infoText)) {
        if (info.style.display == "none") {
            infoTextWasInViewport = true
            infoText.style.animation = ""
        }

        if (!infoTextWasInViewport) {
            infoText.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        if (isInViewportX(infoText)) {
            infoTextWasInViewport = false
        }
    }

    if (isInViewport(miniGallery)) {
        if (miniGallery.style.display == "none") {
            miniGalleryWasInViewport = true
            miniGallery.style.animation = ""
        }

        if (!miniGalleryWasInViewport) {
            miniGallery.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        if (isInViewportX(miniGallery)) {
            miniGalleryWasInViewport = false
        }
    }

    if (isInViewport(infoGrid)) {
        if (infoGrid.style.display == "none") {
            infoGridWasInViewport = true
            infoGrid.style.animation = ""
        }

        if (!infoGridWasInViewport) {
            infoGrid.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        if (isInViewportX(infoGrid)) {
            infoGridWasInViewport = false
        }
    }
}

/* Flow */
async function loadInfoText() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()
    
    infoText.innerText = data.info[0].text
}

async function loadMiniGallery() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    for (let i = 0; i < JSON.parse(data.info[0].mini_gallery).length; i++) {
        let miniGalleryItem = document.getElementById('mini-gallery-item-pos' + (i + 1))

        let img = document.createElement("img")
        img.classList.add("mini-gallery-img")
        if (i == 2) { img.classList.add("mini-gallery-size") }
        img.src = JSON.parse(data.info[0].mini_gallery)[i]

        miniGalleryItem.appendChild(img)
    }
}

function startupInfoAnim() {
    if (infoTitleWasInViewport && info.style.display == "block") {
        infoTitle.classList.add('underline')
    }
}

function main() {
    loadInfoText()
    loadMiniGallery()
    startupInfoAnim()
}

main()