/* Const */
const galleryTitle = document.getElementById('gallery-title')
const galleryGrid = document.getElementById('gallery-grid')
const galleryCarousel = document.getElementById('gallery-carousel')
const galleryCarouselInner = document.getElementById('gallery-carousel-inner')
const galleryFade = document.getElementById('gallery-fade')
const galleryCarouselCtrlNext = document.getElementById('gallery-carousel-control-next')
const galleryCarouselCtrlPrev = document.getElementById('gallery-carousel-control-prev')

/* Var */
var galleryTitleWasInViewport = true
var galleryGridWasInViewport = true

/* Event listener */
window.addEventListener('scroll', function () {
    animateGalleryOnScroll()
    stickyGalleryCarousel()
})

window.addEventListener('resize', function () {
    animateGalleryOnScroll()
    stickyGalleryCarousel()
})

gallery.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateToLeft") {
        galleryFade.style.visibility = "hidden"
        galleryFade.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarousel.style.visibility = "hidden"
        galleryCarousel.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarouselCtrlNext.style.visibility = "hidden"
        galleryCarouselCtrlNext.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarouselCtrlPrev.style.visibility = "hidden"
        galleryCarouselCtrlPrev.style.animation = "opacityHide 0.5s forwards"
    }

    if (anim.animationName == "translateToRight") {
        galleryFade.style.visibility = "hidden"
        galleryFade.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarousel.style.visibility = "hidden"
        galleryCarousel.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarouselCtrlNext.style.visibility = "hidden"
        galleryCarouselCtrlNext.style.animation = "opacityHide 0.5s forwards"
    
        galleryCarouselCtrlPrev.style.visibility = "hidden"
        galleryCarouselCtrlPrev.style.animation = "opacityHide 0.5s forwards"
    }
})

gallery.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            galleryTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromLeft") {
            galleryTitle.classList.add('underline')

            for (const child of galleryCarouselInner.children) {
                if (child.classList.contains("active")) {
                    galleryFade.style.visibility = "visible"
                    galleryFade.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarousel.style.visibility = "visible"
                    galleryCarousel.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarouselCtrlNext.style.visibility = "visible"
                    galleryCarouselCtrlNext.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarouselCtrlPrev.style.visibility = "visible"
                    galleryCarouselCtrlPrev.style.animation = "opacityShow 0.5s forwards"
                }
            }
        }

        if (anim.animationName == "translateFromRight") {
            galleryTitle.classList.add('underline')

            for (const child of galleryCarouselInner.children) {
                if (child.classList.contains("active")) {
                    galleryFade.style.visibility = "visible"
                    galleryFade.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarousel.style.visibility = "visible"
                    galleryCarousel.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarouselCtrlNext.style.visibility = "visible"
                    galleryCarouselCtrlNext.style.animation = "opacityShow 0.5s forwards"
                
                    galleryCarouselCtrlPrev.style.visibility = "visible"
                    galleryCarouselCtrlPrev.style.animation = "opacityShow 0.5s forwards"
                }
            }
        }

        if (anim.animationName == "translateToLeft") {
            galleryTitle.classList.remove('underline')
        }

        if (anim.animationName == "translateToRight") {
            galleryTitle.classList.remove('underline')
        }
    }
})

galleryTitle.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        galleryTitleWasInViewport = true
    }
})

galleryTitle.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            galleryTitle.style.animation = ""
            galleryTitle.classList.add('underline')
        }
    }
})

galleryGrid.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        galleryGridWasInViewport = true
    }
})

galleryGrid.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            galleryGrid.style.animation = ""
        }
    }
})

galleryFade.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            galleryFade.style.visibility = "hidden"
            galleryFade.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            galleryFade.style.animation = ""
        }
    }
})

galleryCarousel.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            galleryCarousel.style.visibility = "hidden"
            galleryCarousel.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            galleryCarousel.style.animation = ""
        }
    }
})

galleryCarouselCtrlNext.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            galleryCarouselCtrlNext.style.visibility = "hidden"
            galleryCarouselCtrlNext.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            galleryCarouselCtrlNext.style.animation = ""
        }
    }
})

galleryCarouselCtrlPrev.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityHide") {
            galleryCarouselCtrlPrev.style.visibility = "hidden"
            galleryCarouselCtrlPrev.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            galleryCarouselCtrlPrev.style.animation = ""
        }
    }
})

/* Click */
function clickGalleryItem() {
    let id = this.id.replace(/[^0-9]/g, '')
    let child = document.getElementById('gallery-carousel-item' + id)

    for (const child of galleryCarouselInner.children) {
        if (child.classList.contains("active")) {
            child.classList.remove("active")
        }
    }
    
    child.classList.add("active")

    stickyGalleryCarousel()

    galleryFade.style.visibility = "visible"
    galleryFade.style.animation = "opacityShow 0.5s forwards"

    galleryCarousel.style.visibility = "visible"
    galleryCarousel.style.animation = "opacityShow 0.5s forwards"

    galleryCarouselCtrlNext.style.visibility = "visible"
    galleryCarouselCtrlNext.style.animation = "opacityShow 0.5s forwards"

    galleryCarouselCtrlPrev.style.visibility = "visible"
    galleryCarouselCtrlPrev.style.animation = "opacityShow 0.5s forwards"
}

function clickGalleryFade() {
    galleryFade.style.animation = "opacityHide 0.5s forwards"
    galleryCarousel.style.animation = "opacityHide 0.5s forwards"
    galleryCarouselCtrlNext.style.animation = "opacityHide 0.5s forwards"
    galleryCarouselCtrlPrev.style.animation = "opacityHide 0.5s forwards"

    for (const child of galleryCarouselInner.children) {
        if (child.classList.contains("active")) {
            child.classList.remove("active")
        }
    }
}

/* Help functionality */
function animateGalleryOnPanelCollapsed() {
    if (!galleryTitleWasInViewport) {
        galleryTitle.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!galleryGridWasInViewport) {
        galleryGrid.style.animation = "translateFromLeft 0.5s forwards"
    }

    stickyGalleryCarousel(150, 300)
}

function animateGalleryOnScroll() {
    if (isInViewport(galleryTitle)) {
        if (gallery.style.display == "none") {
            galleryTitleWasInViewport = true
            galleryTitle.style.animation = ""
        }

        if (!galleryTitleWasInViewport) {
            galleryTitle.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        galleryTitle.classList.remove('underline')

        if (isInViewportX(galleryTitle)) {
            galleryTitleWasInViewport = false
        }
    }

    if (isInViewport(galleryGrid)) {
        if (gallery.style.display == "none") {
            galleryGridWasInViewport = true
            galleryGrid.style.animation = ""
        }

        if (!galleryGridWasInViewport) {
            galleryGrid.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        if (isInViewportX(galleryGrid)) {
            galleryGridWasInViewport = false
        }
    }
}

function stickyGalleryCarousel(durationCollapsed = 0, durationNotCollapsed = 0) {
    for (i = 0; i < galleryCarousel.getAnimations().length; i++) {
        if (galleryCarousel.getAnimations()[i].playState !== 'finished') {
            return
        }
    }

    if (window.innerWidth >= 992) {
        if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
            galleryFade.animate({top: ((header.offsetHeight - headerCarousel.offsetHeight) - window.pageYOffset) + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarousel.animate({top: ((header.offsetHeight - headerCarousel.offsetHeight) - window.pageYOffset) + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlPrev.animate({top: ((header.offsetHeight - headerCarousel.offsetHeight) - window.pageYOffset) + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlNext.animate({top: ((header.offsetHeight - headerCarousel.offsetHeight) - window.pageYOffset) + "px"}, {duration: 0, fill: 'forwards'})

        } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
            galleryFade.animate({top: 68 + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarousel.animate({top: 68 + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlPrev.animate({top: 68 + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlNext.animate({top: 68 + "px"}, {duration: 0, fill: 'forwards'})

        } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
            galleryFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight))  + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarousel.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight))  + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlPrev.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight))  + "px"}, {duration: 0, fill: 'forwards'})
            galleryCarouselCtrlNext.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight))  + "px"}, {duration: 0, fill: 'forwards'})
        }
    } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        if (panelToggler.classList.contains("collapsed")) {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                galleryFade.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: (154 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
            }
        } else {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                galleryFade.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: (526 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 428 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
            }
        }
    } else if (window.innerWidth <= 767) {
        if (panelToggler.classList.contains("collapsed")) {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                galleryFade.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: (145 - window.pageYOffset) + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 56 + "px"}, {duration: durationCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationCollapsed, fill: 'forwards'})
            }
        } else {
            if (window.pageYOffset <= (header.offsetHeight - headerCarousel.offsetHeight - panel.offsetHeight)) {
                galleryFade.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: (494.5 - window.pageYOffset) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset < document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 405.5 + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})

            } else if (window.pageYOffset >= document.body.clientHeight - window.innerHeight - footer.offsetHeight - panel.offsetHeight) {
                galleryFade.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarousel.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlPrev.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
                galleryCarouselCtrlNext.animate({top: 0 - (window.pageYOffset - (document.body.clientHeight - window.innerHeight - footer.offsetHeight)) + "px"}, {duration: durationNotCollapsed, fill: 'forwards'})
            }
        }
    }
}

/* Flow */
async function loadGalleryGrid() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    for (let i = 0; i < data.gallery.length; i++) {
        let btn = document.createElement("button")
        btn.setAttribute("id", "gallery-item" + i)
        btn.classList.add("gallery-item")

        btn.onclick = clickGalleryItem

        let img = document.createElement("img")
        img.classList.add("gallery-img")
        img.src = data.gallery[i].image

        galleryGrid.appendChild(btn)
        btn.appendChild(img)
    }

    loadGalleryCarousel()
}

function loadGalleryCarousel() {
    for (let i = 0; i < galleryGrid.childElementCount; i++) {
        let div = document.createElement("div")
        div.setAttribute("id", "gallery-carousel-item" + i)
        div.classList.add("carousel-item")
        div.classList.add("gallery-carousel-item")

        let img = document.createElement("img")
        img.classList.add("d-block")
        img.classList.add("w-100")
        img.src = galleryGrid.children[i].children[0].getAttribute('src')

        galleryCarouselInner.appendChild(div)
        div.appendChild(img)
    }
}

function startupGalleryAnim() {
    if (galleryTitleWasInViewport && gallery.style.display == "block") {
        galleryTitle.classList.add('underline')
    }
}

function main() {
    loadGalleryGrid()
    startupGalleryAnim()
}

main()