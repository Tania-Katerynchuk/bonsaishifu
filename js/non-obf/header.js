/* Const */
const banner = document.getElementById("banner")
const logo = document.getElementById("logo")
const panel = document.getElementById("panel")
const panelToggler = document.getElementById("panel-toggler")
const newsFa = document.getElementById("news-fa")
const infoFa = document.getElementById("info-fa")
const storeFa = document.getElementById("store-fa")
const galleryFa = document.getElementById("gallery-fa")
const contactFa = document.getElementById("contact-fa")
const headerCarousel = document.getElementById('header-carousel')
const headerCarouselInner = document.getElementById('header-carousel-inner')

/* Var */
var sticky = panel.offsetTop

/* Event listener */
window.addEventListener('load', function () {
    stickyPanel()
})

window.addEventListener('scroll', function () {
    stickyPanel()
})

window.addEventListener('resize', function () {
    stickyPanel()
})

logo.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "rotateFullRight360") {
            logo.style.animation = ""
        }

        if (anim.animationName == "rotateFullLeft360") {
            logo.style.animation = ""
        }
    }
})

/* Click */
function clickPanelToggler() {
    if (window.innerWidth <= 991) {
        if (panelToggler.classList.contains("collapsed")) {
            logo.style.animation = "rotateFullRight360 0.7s"
        } else {
            logo.style.animation = "rotateFullLeft360 0.7s"
        }
    }

    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        if (window.pageYOffset >= sticky) {
            if (panelToggler.classList.contains("collapsed")) {
                banner.style.animation = "bannerPaddingToCollapsedMd 0.3s forwards"
            } else {
                banner.style.animation = "bannerPaddingFromCollapsedMd 0.3s forwards"
            }
        }

    } else if (window.innerWidth <= 767) {
        if (window.pageYOffset >= sticky) {
            if (panelToggler.classList.contains("collapsed")) {
                banner.style.animation = "bannerPaddingToCollapsedSm 0.3s forwards"
            } else {
                banner.style.animation = "bannerPaddingFromCollapsedSm 0.3s forwards"
            }
        }
    }
}

function removeActiveButton() {
    newsFa.style.color = "#212529"
    infoFa.style.color = "#212529"
    storeFa.style.color = "#212529"
    galleryFa.style.color = "#212529"
    contactFa.style.color = "#212529"

    newsFa.style.opacity = 1
    infoFa.style.opacity = 1
    storeFa.style.opacity = 1
    galleryFa.style.opacity = 1
    contactFa.style.opacity = 1
}

function clickNewsButton() {
    removeActiveButton()
    newsFa.style.color = "#c80000"
    newsFa.style.opacity = 0.7
}

function clickInfoButton() {
    removeActiveButton()
    infoFa.style.color = "#c80000"
    infoFa.style.opacity = 0.7
}

function clickStoreButton() {
    removeActiveButton()
    storeFa.style.color = "#c80000"
    storeFa.style.opacity = 0.7
}

function clickGalleryButton() {
    removeActiveButton()
    galleryFa.style.color = "#c80000"
    galleryFa.style.opacity = 0.7
}

function clickContactButton() {
    removeActiveButton()
    contactFa.style.color = "#c80000"
    contactFa.style.opacity = 0.7
}

/* Help functionality */
function stickyPanel() {
    if (window.pageYOffset >= sticky) {
        if (window.innerWidth >= 768 && window.innerWidth <= 991) {
            if (panelToggler.classList.contains("collapsed")) {
                banner.style.paddingBottom = '64px'
            } else {
                banner.style.paddingBottom = '436px'
            }

        } else if (window.innerWidth <= 767) {
            if (panelToggler.classList.contains("collapsed")) {
                banner.style.paddingBottom = '64px'
            } else {
                banner.style.paddingBottom = '413.5px'
            }

        } else {
            banner.style.animation = ""
            banner.style.paddingBottom = '76px'
        }
        panel.classList.add("panel-sticky-custom")
        
    } else {
        banner.style.animation = ""
        banner.style.paddingBottom = '8px'
        panel.classList.remove("panel-sticky-custom")
    }
}

/* Flow */
async function loadHeaderCarousel() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    for (let i = 0; i < data.header.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("id", "header-carousel-item" + i)
        div.classList.add("carousel-item")
        if (i == 0) {
            div.classList.add("active")
        }
        div.classList.add("header-carousel-item-custom")

        let img = document.createElement("img")
        img.classList.add("d-block")
        img.classList.add("w-100")
        img.src = data.header[i].image
 
        headerCarouselInner.appendChild(div)
        div.appendChild(img)
    }
}

function startupButton() {
    if (settings.page == "news") {
        clickNewsButton()
    } else if (settings.page == "info") {
        clickInfoButton()
    } else if (settings.page == "store") {
        clickStoreButton()
    } else if (settings.page == "gallery") {
        clickGalleryButton() 
    } else if (settings.page == "contact") {
        clickContactButton()
    }
}

function main() {
    startupButton()
    loadHeaderCarousel()
}

main()