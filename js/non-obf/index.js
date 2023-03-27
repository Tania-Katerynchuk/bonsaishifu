// /* Json */
const settings = loadJSON("../../json/settings.json")

/* Const */
const pages = document.getElementById("pages")
const info = document.getElementById("info")
const gallery = document.getElementById("gallery")
const store = document.getElementById("store")
const contact = document.getElementById("contact")
const news = document.getElementById("news")

/* Var */
var data = {}
var activePage = "info"

/* Click */
function clickInfoPage() {
    activePage = "info"

    if (gallery.style.display == "block") {
        gallery.style.animation = "translateToRight 0.25s"

    } else if (news.style.display == "block") {
        news.style.animation = "translateToLeft 0.25s"

    } else if (store.style.display == "block") {
        store.style.animation = "translateToRight 0.25s"

    } else if (contact.style.display == "block") {
        contact.style.animation = "translateToRight 0.25s"

    } else {
        info.style.animation = "opacityShow 0.5s forwards"
    }
}

function clickGalleryPage() {
    activePage = "gallery"

    if (info.style.display == "block") {
        info.style.animation = "translateToLeft 0.25s"

    } else if (news.style.display == "block") {
        news.style.animation = "translateToLeft 0.25s"

    } else if (store.style.display == "block") {
        store.style.animation = "translateToLeft 0.25s"

    } else if (contact.style.display == "block") {
        contact.style.animation = "translateToRight 0.25s"
        
    } else {
        gallery.style.animation = "opacityShow 0.5s forwards"
    }
}

function clickStorePage() {
    activePage = "store"

    if (info.style.display == "block") {
        info.style.animation = "translateToLeft 0.25s"

    } else if (gallery.style.display == "block") {
        gallery.style.animation = "translateToRight 0.25s"

    } else if (news.style.display == "block") {
        news.style.animation = "translateToLeft 0.25s"

    } else if (contact.style.display == "block") {
        contact.style.animation = "translateToRight 0.25s"

    } else {
        store.style.animation = "opacityShow 0.5s forwards"
    }
}

function clickContactPage() {
    activePage = "contact"

    if (info.style.display == "block") {
        info.style.animation = "translateToLeft 0.25s"

    } else if (gallery.style.display == "block") {
        gallery.style.animation = "translateToLeft 0.25s"

    } else if (news.style.display == "block") {
        news.style.animation = "translateToLeft 0.25s"

    } else if (store.style.display == "block") {
        store.style.animation = "translateToLeft 0.25s"

    } else {
        contact.style.animation = "opacityShow 0.5s forwards"
    }
}

function clickNewsPage() {
    activePage = "news"

    if (info.style.display == "block") {
        info.style.animation = "translateToRight 0.25s"

    } else if (gallery.style.display == "block") {
        gallery.style.animation = "translateToRight 0.25s"

    } else if (store.style.display == "block") {
        store.style.animation = "translateToRight 0.25s"

    } else if (contact.style.display == "block") {
        contact.style.animation = "translateToRight 0.25s"

    } else {
        news.style.animation = "opacityShow 0.5s forwards"
    }
}

/* Event listener */
news.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateToLeft") {
            news.style.display = "none"
            
            if (activePage == "info") {
                info.style.display = "block"
                info.style.animation = "translateFromRight 0.25s forwards"

            } else if (activePage == "gallery") {
                gallery.style.display = "block"
                gallery.style.animation = "translateFromRight 0.25s forwards"

            } else if (activePage == "store") {
                store.style.display = "block"
                store.style.animation = "translateFromRight 0.25s forwards"

            } else if (activePage == "contact") {
                contact.style.display = "block"
                contact.style.animation = "translateFromRight 0.25s forwards"
            }
        }

        if (anim.animationName == "translateFromLeft") {
            news.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            news.style.animation = ""
        }
    }
})

info.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateToLeft") {
            info.style.display = "none"

            if (activePage == "gallery") {
                gallery.style.display = "block"
                gallery.style.animation = "translateFromRight 0.25s forwards"
                
            } else if (activePage == "store") {
                store.style.display = "block"
                store.style.animation = "translateFromRight 0.25s forwards"

            } else if (activePage == "contact") {
                contact.style.display = "block"
                contact.style.animation = "translateFromRight 0.25s forwards"
            }
        }

        if (anim.animationName == "translateToRight") {
            info.style.display = "none"

            if (activePage == "news") {
                news.style.display = "block"
                news.style.animation = "translateFromLeft 0.25s forwards"
            }
        }

        if (anim.animationName == "translateFromRight") {
            info.style.animation = ""
        }

        if (anim.animationName == "translateFromLeft") {
            info.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            info.style.animation = ""
        }
    }
})

store.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateToLeft") {
            store.style.display = "none"

            if (activePage == "gallery") {
                gallery.style.display = "block"
                gallery.style.animation = "translateFromRight 0.25s forwards"

            } else if (activePage == "contact") {
                contact.style.display = "block"
                contact.style.animation = "translateFromRight 0.25s forwards"
            }
        }

        if (anim.animationName == "translateToRight") {
            store.style.display = "none"

            if (activePage == "info") {
                info.style.display = "block"
                info.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "news") {
                news.style.display = "block"
                news.style.animation = "translateFromLeft 0.25s forwards"

            }
        }

        if (anim.animationName == "translateFromRight") {
            store.style.animation = ""
        }

        if (anim.animationName == "translateFromLeft") {
            store.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            store.style.animation = ""
        }
    }
})

gallery.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateToLeft") {
            gallery.style.display = "none"

            if (activePage == "contact") {
                contact.style.display = "block"
                contact.style.animation = "translateFromRight 0.25s forwards"
            }
        }

        if (anim.animationName == "translateToRight") {
            gallery.style.display = "none"

            if (activePage == "info") {
                info.style.display = "block"
                info.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "news") {
                news.style.display = "block"
                news.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "store") {
                store.style.display = "block"
                store.style.animation = "translateFromLeft 0.25s forwards"
            }
        }

        if (anim.animationName == "translateFromRight") {
            gallery.style.animation = ""
        }

        if (anim.animationName == "translateFromLeft") {
            gallery.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            gallery.style.animation = ""
        }
    }
})

contact.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateToRight") {
            contact.style.display = "none"

            if (activePage == "info") {
                info.style.display = "block"
                info.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "news") {
                news.style.display = "block"
                news.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "store") {
                store.style.display = "block"
                store.style.animation = "translateFromLeft 0.25s forwards"

            } else if (activePage == "gallery") {
                gallery.style.display = "block"
                gallery.style.animation = "translateFromLeft 0.25s forwards"
            }
        }

        if (anim.animationName == "translateFromRight") {
            contact.style.animation = ""
        }

        if (anim.animationName == "opacityShow") {
            contact.style.animation = ""
        }
    }
})

/* Flow */
function startupPage() {
    for (child of pages.children) {
        if (child.id == settings.page) {
            child.style.display = "block"
        } else {
            child.style.display = "none"
        }
    }
}

function main() {
    startupPage()
}

main()