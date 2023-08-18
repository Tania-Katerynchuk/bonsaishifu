/* Const */
const newsTitle = document.getElementById('news-title')
const newsGrid = document.getElementById('news-grid')

/* Var */
var newsTitleWasInViewport = true
var newsGridWasInViewport = true

/* Event listener */
window.addEventListener('scroll', function () {
    animateNewsOnScroll()
})

window.addEventListener('resize', function () {
    animateNewsOnScroll()
})

news.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "opacityShow") {
            newsTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromLeft") {
            newsTitle.classList.add('underline')
        }

        if (anim.animationName == "translateFromRight") {
            newsTitle.classList.add('underline')
        }

        if (anim.animationName == "translateToLeft") {
            newsTitle.classList.remove('underline')
        }

        if (anim.animationName == "translateToRight") {
            newsTitle.classList.remove('underline')
        }
    }
})

newsTitle.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromRight") {
        newsTitleWasInViewport = true
    }
})

newsTitle.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromRight") {
            newsTitle.style.animation = ""
            newsTitle.classList.add('underline')
        }
    }
})

newsGrid.addEventListener("animationstart", function(anim) {
    if (anim.animationName == "translateFromLeft") {
        newsGridWasInViewport = true
    }
})

newsGrid.addEventListener("animationend", function(anim) {
    if (anim.target === this) {
        if (anim.animationName == "translateFromLeft") {
            newsGrid.style.animation = ""
        }
    }
})

/* Help functionality */
function animateNewsOnPanelCollapsed() {
    if (!newsTitleWasInViewport) {
        newsTitle.style.animation = "translateFromRight 0.5s forwards"
    }

    if (!newsGridWasInViewport) {
        newsGrid.style.animation = "translateFromLeft 0.5s forwards"
    }
}

function animateNewsOnScroll() {
    if (isInViewport(newsTitle)) {
        if (news.style.display == "none") {
            newsTitleWasInViewport = true
            newsTitle.style.animation = ""
        }

        if (!newsTitleWasInViewport) {
            newsTitle.style.animation = "translateFromRight 0.5s forwards"
        }
    } else {
        newsTitle.classList.remove('underline')

        if (isInViewportX(newsTitle)) {
            newsTitleWasInViewport = false
        }
    }

    if (isInViewport(newsGrid)) {
        if (news.style.display == "none") {
            newsGridWasInViewport = true
            newsGrid.style.animation = ""
        }

        if (!newsGridWasInViewport) {
            newsGrid.style.animation = "translateFromLeft 0.5s forwards"
        }
    } else {
        if (isInViewportX(newsGrid)) {
            newsGridWasInViewport = false
        }
    }
}

/* Flow */
async function loadNewsGrid() {
    const res = await fetch(window.location.href + "data",
    {
        method: 'GET'
    })
    const data = await res.json()

    for (let i = data.news.length - 1; i >= 0; i--) {
        let item = document.createElement("div")
        item.classList.add("news-item")

        let name = document.createElement("p")
        name.classList.add("news-name")
        name.innerText = data.news[i].title

        let date = document.createElement("p")
        date.classList.add("news-date")
        date.innerText = "01.01.2023"

        let content = document.createElement("div")
        content.classList.add("news-content")

        let desc = document.createElement("p")
        desc.classList.add("news-desc")
        desc.innerText = data.news[i].text

        newsGrid.appendChild(item)

        item.appendChild(name)
        item.appendChild(date)
        item.appendChild(content)

        content.appendChild(desc)
    }
}

function startupNewsAnim() {
    if (newsTitleWasInViewport && news.style.display == "block") {
        newsTitle.classList.add('underline')
    }
}

function main() {
    loadNewsGrid()
    startupNewsAnim()
}

main()